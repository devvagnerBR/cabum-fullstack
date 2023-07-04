import React from 'react'
import { textLimit } from './../../util/text-limit';



const ModalSearch = () => {
    return (
        <div className='absolute w-full  z-50 bg-neutral-100 border'>
            <div className='flex w-full items-center gap-2 p-2 h-10 border-b cursor-pointer'>
                <img src="" alt='M' />
                <h2 className='text-md'>{textLimit( 'Monitor Gamer Led 23.8", 75Hz, 1ms LG, Full HD, Painel, Ips, HDMI, VGA Vesa, Preto, Bivolt',70 )}</h2>
            </div>
            <div className='flex w-full items-center gap-2 p-2 h-10 border-b cursor-pointer'>
                <img src="" alt='M' />
                <h2 className='text-md'>{textLimit( 'Monitor Gamer Led 23.8", 75Hz, 1ms LG, Full HD, Painel, Ips, HDMI, VGA Vesa, Preto, Bivolt',70 )}</h2>
            </div>
            <div className='flex w-full items-center gap-2 p-2 h-10 border-b cursor-pointer'>
                <img src="" alt='M' />
                <h2 className='text-md'>{textLimit( 'Monitor Gamer Led 23.8", 75Hz, 1ms LG, Full HD, Painel, Ips, HDMI, VGA Vesa, Preto, Bivolt',70 )}</h2>
            </div>
            <div className='flex w-full items-center gap-2 p-2 h-10 border-b cursor-pointer'>
                <img src="" alt='M' />
                <h2 className='text-md'>{textLimit( 'Monitor Gamer Led 23.8", 75Hz, 1ms LG, Full HD, Painel, Ips, HDMI, VGA Vesa, Preto, Bivolt',70 )}</h2>
            </div>
        </div>
    )
}

export default ModalSearch