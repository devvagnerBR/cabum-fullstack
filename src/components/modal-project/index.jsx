import { Warning,X } from '@phosphor-icons/react'
import React from 'react'
import { useUtilitiesContext } from '../../context/utilities-context';



const ModalProject = () => {


    const [modalTerms,setModalTerms] = React.useState( false )

    const {
        setCookie,
        getCookie
    } = useUtilitiesContext()

    React.useEffect( () => {

        const terms = getCookie( 'terms' )
        if ( terms ) setModalTerms( true )
    },[modalTerms] )


    const acceptTerms = () => {
        setCookie( 'terms',true,7 )
        setModalTerms( true )
    }

    return (
        <div className={`${modalTerms ? 'hidden' : 'flex'}   flex flex-col items-center z-0 justify-center  absolute top-0 w-full h-[calc(100vh-7rem)] max-md:h-[calc(100vh-4rem)] bg-neutral-700/70 `}>
            <section className='bg-white rounded-sm flex-col max-w-[600px] w-[90%] h-fit    flex items-center justify-start'>
                <nav className='bg-blue-600 w-full justify-between flex h-16 items-center px-2 '>
                    <div className='flex  gap-1 items-center'>
                        <Warning size={18} className='fill-white' />
                        <p className='text-white'>IMPORTANTE</p>
                    </div>
                    <X onClick={() => setModalTerms( true )} size={26} className='fill-white cursor-pointer' />
                </nav>
                <main className='p-2 w-full h-full flex flex-col gap-2  items-center justify-center text-center'>
                    <p className='font-bold text-blue-600 text-xl'>Todas os métodos de pagamentos são fictícios</p>
                    <p className='text-blue-500 leading-4 text-sm flex-wrap max-w-lg'>Formulário de cartão de crédito pode ser preenchido com informações "não reais" </p>
                    <p className='text-blue-500 leading-4 text-sm flex-wrap max-w-md'>Após o pagamento o pedido irá para a aba <span className='font-semibold text-blue-600'>"meus pedidos"</span> no seu perfil</p>
                </main>
                <section className='w-full  p-2 items-end max-sm:items-center flex max-sm:flex-col justify-center gap-2'>
                    <button onClick={() => setModalTerms( true )} className='bg-orange-500 text-white font-bold rounded-sm py-4 px-4 max-sm:w-[90%]'>OK, ESTOU CIENTE</button>
                    <button onClick={acceptTerms} className='p-3 border-orange-500 border text-orange-500 font-bold py-4 rounded-sm px-4 max-sm:w-[90%]'>NÃO MOSTRAR ESSA MENSAGEM NOVAMENTE</button>
                </section>
            </section>

        </div>
    )
}

export default ModalProject