import { Basket,Trash,FireSimple } from '@phosphor-icons/react'
import React from 'react'
import { textLimit } from './../../../util/text-limit';

const ProductsInCartSection = () => {








    return (
        <div className='flex flex-col items-start justify-start h-full w-full py-4 px-6  border rounded-sm shadow-sm mt-4'>
            <header className='flex items-center justify-between w-full gap-2'>
                <div className='flex items-center gap-2'>
                    <Basket weight='fill' size={16} className='fill-orange-500' />
                    <h1 className='font-bold text-xl text-neutral-600'>PRODUTO E FRETE</h1>
                </div>
                <section className='flex items-center gap-2 border p-1 border-red-500 rounded-sm cursor-pointer'>
                    <Trash size={22} weight='fill' className='fill-red-500' />
                    <p className='font-bold text-red-500 text-sm'>REMOVER TODOS OS PRODUTOS</p>
                </section>
            </header>

            <section className='mt-6 w-full'>
                <p className='bg-neutral-200/70 w-fit h-5 flex items-center gap-1 text-xs p-1'>Vendido e entregue por <span className='font-bold'> KaBuM!</span></p>
                <main className='border-t border-neutral-200/70 w-full'>

                    <div className='mt-2 flex items-start gap-4'>
                        <img className='w-24' src="https://images.kabum.com.br/produtos/fotos/149989/mouse-sem-fio-gamer-logitech-g-pro-x-superlight-lightspeed-5-botoes-25000-dpi-910-005879_1614261139_gg.jpg" alt="" />
                        <div className='flex-1'>
                            <h1 className='font-semibold text-sm'>{textLimit( 'Mouse Sem Fio Gamer Logitech G PRO X Superlight, Lightspeed, 25000 DPI, 5 Botões, Preto - 910-005879',60 )}</h1>
                            <h2 className='text-sm pt-2 text-neutral-500 leading-3'>Com desconto no PIX: <span className='font-bold'>R$ 749,99</span></h2>
                            <h2 className='text-sm text-neutral-500 leading-3'>Parcelado no cartão em até 10x sem juros:<span className='font-bold'>R$ 882,34</span></h2>
                            <div className='flex items-center gap-1 pt-4'>
                                <FireSimple weight='fill' size={16} className='fill-orange-500' />
                                <h2 className='text-sm font-semibold text-neutral-600 leading-3 flex items-center'>OFERTA NINJA </h2>
                            </div>
                        </div>
                        <div className='h-full w-[300px] flex items-start justify-between '>

                            <section className='flex flex-col items-center justify-evenly  h-full'>

                                <h1 className='text-sm text-neutral-700'>Quant.</h1>

                                <nav className='flex gap-6 pt-2'>
                                    <p className='text-neutral-400 font-bold cursor-pointer'>{"<"}</p>
                                    <p className='font-bold'>1</p>
                                    <p className='text-orange-500 font-bold cursor-pointer'>{">"}</p>
                                </nav>

                                <section className='flex gap-2 mt-4 items-center cursor-pointer'>
                                    <Trash className='fill-red-500' />
                                    <p className='text-red-500 font-semibold text-sm'>REMOVER</p>
                                </section>
                            </section>

                            <section>
                                <p className='text-sm'>Preço à vista no PIX:</p>
                                <p className='font-bold text-orange-500 text-end mt-3'>R$ 749,99</p>
                            </section>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )

}

export default ProductsInCartSection