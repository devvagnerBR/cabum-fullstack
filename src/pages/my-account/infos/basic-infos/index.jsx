import { FileText,Lock } from '@phosphor-icons/react'
import React from 'react'
import { myContext } from '../../../../hooks/useContext'
import moment from 'moment'
import InputMask from "react-input-mask";
import { useUserContext } from '../../../../context/user-context';


const BasicInfos = () => {

    const {
        user,
        updateNameOrPhoneNumber
    } = useUserContext()

    const formattedDate = moment( user?.birthday ).format( 'DD/MM/YYYY' )
    const [newInfos,setNewInfos] = React.useState( {
        newName: '',
        newPhoneNumber: ''
    } )

    const handleUpdateNameAndPhoneNumber = async () => {
        await updateNameOrPhoneNumber( newInfos )
    }

    return (
        <aside className='border flex  gap-4 flex-col p-4'>
            <header
                className='flex gap-2 items-center py-4'>
                <FileText
                    weight='fill'
                    size={22}
                    className='fill-orange-500' />
                <h1
                    className='text-sm font-bold'>
                    DADOS BÁSICOS
                </h1>
            </header>
            {/* <nav className='flex max-[900px]:flex-col gap-2'>
                <button className='border border-orange-500 text-orange-500 font-semibold w-full rounded-sm p-4'>ALTERAR E-MAIL</button>
                <button className='border border-orange-500 text-orange-500 font-semibold w-full rounded-sm p-4'>ALTERAR SENHA</button>
            </nav> */}
            <form className='gap-1 flex flex-col'>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 '>
                    Nome completo*
                    <input
                        id='name'
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                        value={newInfos.newName || user?.name}
                        onChange={( e ) => setNewInfos( { ...newInfos,newName: e.target.value } )}
                    />
                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' >
                    Telefone celular*
                    <InputMask
                        mask="(99) 99999-9999"
                        id='phone'
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                        onChange={( e ) => setNewInfos( { ...newInfos,newPhoneNumber: e.target.value } )}
                        value={newInfos.newPhoneNumber || user?.phone_number}
                    />
                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' >
                    E-mail
                    <main section="true" className='flex'>
                        <input
                            disabled
                            id='name'
                            className='border-neutral-300 bg-neutral-50 w-full border-r-0 text-base focus-within:border-orange-500 text-neutral-500 border h-12 pl-2'
                            type="text"
                            value={user?.email || ''}
                        />
                        <div className='flex items-center justify-center border border-l-0 border-neutral-300'>
                            <Lock
                                weight='fill'
                                className='bg-neutral-50 h-full fill-neutral-400 mr-2'
                                size={24}
                            />
                        </div>
                    </main>

                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 '>
                    CPF
                    <main section="true" className='flex'>
                        <input
                            readOnly
                            disabled
                            id='name'
                            className='border-neutral-300 bg-neutral-50 w-full border-r-0 text-base focus-within:border-orange-500 text-neutral-500 border h-12 pl-2'
                            type="text"
                            value={user?.cpf || ''}
                        />
                        <div className='flex items-center justify-center border border-l-0 border-neutral-300'>
                            <Lock
                                weight='fill'
                                className='bg-neutral-50 h-full fill-neutral-400 mr-2'
                                size={24}
                            />
                        </div>
                    </main>

                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 '>
                    Data de nascimento
                    <main section="true" className='flex'>
                        <input
                            readOnly
                            disabled
                            id='name'
                            className='border-neutral-300 bg-neutral-50 w-full border-r-0 text-base focus-within:border-orange-500 text-neutral-500 border h-12 pl-2'
                            type="text"
                            value={formattedDate}
                        />
                        <div className='flex items-center justify-center border border-l-0 border-neutral-300'>
                            <Lock
                                weight='fill'
                                className='bg-neutral-50 h-full fill-neutral-400 mr-2'
                                size={24}
                            />
                        </div>
                    </main>

                </label>
            </form>
            <p className='text-xs font-light text-neutral-300'>(*) Campos obrigatórios</p>
            <nav
                className='flex items-center justify-center max-lg:flex-col'>
                <a
                    className='w-full underline text-orange-500 max-lg:text-center font-semibold text-lg cursor-pointer'>EXCLUIR MINHA CONTA
                </a>
                <button
                    onClick={() => handleUpdateNameAndPhoneNumber()}
                    className='w-full h-12 rounded-sm bg-orange-500 text-neutral-50 font-medium text-lg'>SALVAR ALTERAÇÕES</button>
            </nav>
        </aside>
    )
}

export default BasicInfos