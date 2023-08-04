import React from 'react'
import viaCEP from '../util/get-address'
import getPageWidth from '../util/get-page-width'
import countdownTime from '../util/countdown'
import formsValidate from '../services/forms-validate'
import controlledLoading from '../util/controlled-loading'
import { textLimit } from './../util/text-limit';
import transformTittleInSlug from './../util/transform-tittle-in-slug';
import { getCookie,setCookie } from '../hooks/useCookie'
import useFreezeScreen from '../hooks/useFreezeScreen'




const UtilitiesContext = React.createContext( '' )

const UtilitiesProvider = ( { children } ) => {


    const [modalMenu,setModalMenu] = React.useState( false )
    const [modalCompletedPurchase,setModalCompletedPurchase] = React.useState( false )
    const [modalNewAddress,setModalNewAddress] = React.useState( false )
    const [modalEditAddress,setModalEditAddress] = React.useState( null )
    const [editableAddress,setEditableAddress] = React.useState( null )
    const [searchInput,setSearchInput] = React.useState( '' )
    const { loading,awaitLoading } = controlledLoading()
    const { countdown } = countdownTime()
    const { size } = getPageWidth()

    useFreezeScreen( modalMenu )

    const {
        formLoginValidade,
        formSignUpValidade,
        creditCardValidade,
        formNewAddressValidate
    } = formsValidate()

    const {
        getCEP,
        fullAddress,
    } = viaCEP()

    return (
        <UtilitiesContext.Provider value={{
            getCEP,
            fullAddress,
            size,
            modalCompletedPurchase,
            setModalCompletedPurchase,
            countdown,
            formLoginValidade,
            formSignUpValidade,
            creditCardValidade,
            formNewAddressValidate,
            loading,awaitLoading,
            modalNewAddress,setModalNewAddress,
            modalEditAddress,setModalEditAddress,
            editableAddress,setEditableAddress,
            textLimit,
            transformTittleInSlug,
            searchInput,setSearchInput,
            modalMenu,setModalMenu,
            getCookie,setCookie
        }}>
            {children}
        </UtilitiesContext.Provider>
    )

}

const useUtilitiesContext = () => React.useContext( UtilitiesContext )

export { UtilitiesProvider,useUtilitiesContext }