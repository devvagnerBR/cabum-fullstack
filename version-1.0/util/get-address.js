import axios from 'axios'
import React from 'react'


const initialValues = {
    street: '',
    neighborhood: '',
    city: '',
    complement: '',
    uf: '',
}


const viaCEP = () => {


    const [fullAddress,setFullAddress] = React.useState( initialValues )

    const getCEP = ( cep ) => {

        if ( cep ) {
            axios.get( `https://viacep.com.br/ws/${cep}/json/` )
                .then( ( res ) => {

                    const address = res.data

                    let body = {
                        cep: cep,
                        neighborhood: address.bairro,
                        complement: address.complemento || '',
                        city: address.localidade || '',
                        street: address.logradouro || '',
                        uf: address.uf || ''

                    }

                    setFullAddress( body )

                } )
                .catch( ( err ) => console.log( err ) )
        }

    }


    return { getCEP,fullAddress }

}


export default viaCEP;