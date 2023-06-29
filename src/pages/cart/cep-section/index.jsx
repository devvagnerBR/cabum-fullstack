import React from 'react'
import { MapPin } from '@phosphor-icons/react'
import { myContext } from '../../../hooks/useContext'
import InputMask from "react-input-mask";

const CEPSection = () => {

    const [location,setLocation] = React.useState( '' )
    const [cepCode,setCepCode] = React.useState( '' )

    const { getCEP } = myContext()

    const handleGetCEP = async ( e ) => {
        e.preventDefault()

        if ( cepCode ) {
            const res = await getCEP( cepCode )
            setLocation( res );
        }


    }


    return (
        <div className='flex flex-col items-start max-[550px]:items-center justify-start h-fit w-full py-4 px-6  border rounded-sm shadow-sm'>

            <header className='flex items-center gap-2'>
                <MapPin weight='fill' size={16} className='fill-orange-500' />
                <h1 className='font-bold text-xl text-neutral-600'> SELECIONE O ENDEREÇO</h1>
            </header>

            <div className='pt-6 flex  max-[550px]:flex-col  gap-4 items-center w-full'>
                <form onSubmit={handleGetCEP} className='flex gap-3 max-[550px]:w-full '>
                    <InputMask
                        onChange={e => setCepCode( e.target.value )}
                        className='outline-none max-[550px]:w-[90%] h-12 pl-2 border rounded-sm'
                        type="text"
                        placeholder='_____-___'
                        mask="99999-999"
                        maskChar={"_"}
                    />
                    <button className='bg-orange-500 text-white h-12 px-4 rounded-md hover:bg-orange-400 transition-all font-bold'>OK</button>
                </form>
                <a href='https://buscacepinter.correios.com.br/app/endereco/index.php' target='_blank' className='text-xs cursor-pointer text-orange-500 font-semibold'>Não lembro meu CEP</a>
            </div>
            <section className='pt-4'>
                {location && <p className='font-semibold text-xs text-neutral-400'>Entregar em: <span className='font-light text-neutral-400'>{location}</span> </p>}
            </section>
        </div>
    )
}

export default CEPSection