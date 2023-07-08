import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-blue-700 items-center absolute bottom-0 left-0 justify-center gap-4 h-44  flex flex-col'>

            <section className='flex  justify-center gap-8  items-center'>

                <div className=''>
                    <h1 className='text-white text-sm font-semibold pb-2'>CONTATO</h1>
                    <div className='flex flex-col'>
                        <a href='https://www.linkedin.com/in/devvagner/' target='_blank' className='text-neutral-100/60 font-light text-sm cursor-pointer'>LinkedIn</a>
                        <a href='https://github.com/devvagnerBR' target='_blank' className='text-neutral-100/60 font-light text-sm cursor-pointer'>Github</a>
                        <a href='https://www.instagram.com/wgr.lz/' target='_blank' className='text-neutral-100/60 font-light text-sm cursor-pointer'>instagram</a>
                    </div>
                </div>

            </section>

            <div className='mt-4'>
                <h1 className='text-neutral-100/50 font-light text-sm flex-wrap text-center'>Projeto desenvolvido por Wagner Guimarães | Desenvolvedor Front-End</h1>
            </div>

        </footer>
    )
}

export default Footer