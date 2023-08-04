import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { myContext } from '../../../../hooks/useContext'
import { useForm } from 'react-hook-form'
import InputMask from "react-input-mask";
import PaymentActions from '../../payment-actions/index';
import convertToLocaleString from '../../../../util/convert-to-locale-string';
import { GO_TO_CONFIRM_ORDER } from '../../../../router/navigation';
import { useNavigate } from 'react-router-dom';


const CreditCard = () => {

    const navigate = useNavigate()
    const { productsInCart,addOrderInfos } = myContext()
    const [numParcelas,setNumParcelas] = React.useState( 0 )

    const totalPrice = productsInCart?.reduce( ( total,product ) => total + ( product.price * product.quantity ),0 )

    const {
        creditCardValidade,
    } = myContext()

    const { handleSubmit,watch,
        register,
        formState: { errors }
    } = useForm( {
        resolver: zodResolver( creditCardValidade )
    } )

    const parcelas = Array.from( { length: 12 },( _,index ) => index + 1 );

    const handleSelectPayment = async ( data ) => {
        GO_TO_CONFIRM_ORDER( navigate )
    }

    const handleSetPaymentMethod = async () => {
        await addOrderInfos( { paymentMethod: '3',installments_quantity: numParcelas } )
    }

    return (
        <div className='flex flex-col'>
            <header>
                <h1 className='font-semibold text-lg leading-4'>Cartão de crédito</h1>
            </header>
            <form onSubmit={handleSubmit( handleSelectPayment )} className=' flex flex-col  py-4 gap-2' action="" >
                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    Nome impresso no cartão
                    <input
                        type='text'
                        {...register( 'name' )}
                        className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                    />

                    <p className='text-red-400'>{errors.name && errors.name.message}</p>
                </label>


                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    Número do cartão
                    <InputMask
                        type='text'
                        mask={"9999-9999-9999-9999"}
                        maskChar={"_"}
                        {...register( 'card_number' )}
                        placeholder='0000-0000-0000-0000'
                        className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                    />
                    <p className='text-red-400'>{errors.card_number && errors.card_number.message}</p>
                </label>
                <section className='grid grid-cols-3 gap-4  max-lg:grid-cols-2 max-md:grid-cols-1'>
                    <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                        Validade
                        <InputMask
                            type='text'
                            mask={"99/99"}
                            maskChar={"_"}
                            {...register( 'expiration_date' )}
                            placeholder='00/00'
                            className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                        />
                        <p className='text-red-400'>{errors.expiration_date && errors.expiration_date.message}</p>
                    </label>
                    <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                        Código de verificação (CVV)
                        <InputMask
                            type='text'
                            mask={"999"}
                            maskChar={"_"}
                            {...register( 'security_code' )}
                            placeholder='000'
                            className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                        />
                        <p className='text-red-400'>{errors.card_number && errors.card_number.message}</p>
                    </label>
                    <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                        Data de nascimento
                        <InputMask
                            type='text'
                            mask={"99/99/9999"}
                            maskChar={"_"}
                            {...register( 'birth' )}
                            placeholder='00/00/0000'
                            className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                        />
                        <p className='text-red-400'>{errors.birth && errors.birth.message}</p>
                    </label>
                </section>
                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    CPF do titular
                    <InputMask
                        type='text'
                        mask={"999.999.999-99"}
                        maskChar={"_"}
                        {...register( 'cpf' )}
                        placeholder='000.000.000-00'
                        className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                    />
                    <p className='text-red-400'>{errors.cpf && errors.cpf.message}</p>
                </label>
                <label htmlFor="method" className='flex flex-col gap-1 text-sm'>
                    Forma de pagamento

                    <select
                        name=""
                        value={numParcelas}
                        onChange={( { target } ) => setNumParcelas( target.value )}
                        id="method"
                        className='px-2 border h-12 rounded-md border-neutral-400'>

                        {parcelas.map( ( numParcelas ) => {
                            const valorParcela = totalPrice / numParcelas

                            return (
                                <option
                                    key={numParcelas}
                                    value={numParcelas} className='p-2'>
                                    {numParcelas}x sem juros - {convertToLocaleString( valorParcela )}
                                </option>
                            )

                        } )}

                    </select>

                </label>
                <PaymentActions
                    onSubmit={handleSubmit( handleSelectPayment )}
                    onClick={handleSetPaymentMethod}
                    tittle='CONTINUAR'
                />
            </form>

        </div>
    )
}

export default CreditCard