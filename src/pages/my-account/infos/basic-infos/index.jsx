import { UserFocus,FileText,Lock } from '@phosphor-icons/react'
import React from 'react'

const BasicInfos = () => {

    //CRIAR NAVBAR BAR BUTTONS


    return (
        <aside className='border flex gap-4 flex-col p-4'>
            <header
                className='flex gap-2 items-center p-4'>
                <FileText
                    weight='fill'
                    size={22}
                    className='fill-orange-500' />
                <h1
                    className='text-sm font-bold'>
                    DADOS BÁSICOS
                </h1>
            </header>
            <nav className='flex max-[900px]:flex-col gap-2'>
                <button className='border border-orange-500 text-orange-500 font-semibold w-full rounded-sm p-4'>ALTERAR E-MAIL</button>
                <button className='border border-orange-500 text-orange-500 font-semibold w-full rounded-sm p-4'>ALTERAR SENHA</button>
            </nav>
            <form className='  gap-1 flex flex-col'>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' htmlFor="name">
                    Nome completo*
                    <input
                        id='name'
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                    />
                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' htmlFor="name">
                    Telefone Celular
                    <input
                        id='name'
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                    />
                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' htmlFor="name">
                    E-mail
                    <section className='flex'>
                        <input
                            disabled
                            id='name'
                            className='border-neutral-300 bg-neutral-50 w-full border-r-0 text-base focus-within:border-orange-500 text-neutral-500 border h-12 pl-2'
                            type="text"
                            placeholder='wagner@gmail.com'
                        />
                        <div className='flex items-center justify-center border border-l-0 border-neutral-300'>
                            <Lock
                                weight='fill'
                                className='bg-neutral-50 h-full fill-neutral-400 mr-2'
                                size={26}
                            />
                        </div>
                    </section>

                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' htmlFor="name">
                    CPF
                    <section className='flex'>
                        <input
                            disabled
                            id='name'
                            className='border-neutral-300 bg-neutral-50 w-full border-r-0 text-base focus-within:border-orange-500 text-neutral-500 border h-12 pl-2'
                            type="text"
                            placeholder='144.454.977-46'
                        />
                        <div className='flex items-center justify-center border border-l-0 border-neutral-300'>
                            <Lock
                                weight='fill'
                                className='bg-neutral-50 h-full fill-neutral-400 mr-2'
                                size={26}
                            />
                        </div>
                    </section>

                </label>
                <label className='flex flex-col gap-1 text-xs text-neutral-500 ' htmlFor="name">
                    Data de nascimento
                    <section className='flex'>
                        <input
                            disabled
                            id='name'
                            className='border-neutral-300 bg-neutral-50 w-full border-r-0 text-base focus-within:border-orange-500 text-neutral-500 border h-12 pl-2'
                            type="text"
                            placeholder='21/12/1994'
                        />
                        <div className='flex items-center justify-center border border-l-0 border-neutral-300'>
                            <Lock
                                weight='fill'
                                className='bg-neutral-50 h-full fill-neutral-400 mr-2'
                                size={26}
                            />
                        </div>
                    </section>

                </label>
            </form>
            <p className='text-xs font-light text-neutral-300'>(*) Campos obrigatórios</p>
        </aside>
    )
}

export default BasicInfos