import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-blue-700 items-center absolute bottom-0 left-0 justify-center gap-4 h-44  flex flex-col'>

            <section className='flex  justify-center gap-8  items-center'>

                <div>
                    <h1 className='text-white text-sm font-semibold pb-2'>CONTATO</h1>
                    <h1 className='text-neutral-100/60 font-light text-sm cursor-pointer'>LinkedIn</h1>
                    <h1 className='text-neutral-100/60 font-light text-sm cursor-pointer'>Github</h1>
                    <h1 className='text-neutral-100/60 font-light text-sm cursor-pointer'>instagram</h1>
                </div>

            </section>

            <div className='mt-4'>
                <h1 className='text-neutral-100/50 font-light text-sm flex-wrap text-center'>Projeto desenvolvido por Wagner Guimarães | Desenvolvedor Front-End</h1>
            </div>

        </footer>
    )
}

export default Footer