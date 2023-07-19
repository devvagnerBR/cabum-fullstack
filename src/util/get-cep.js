import axios from 'axios'

const getViaCep = async ( code ) => {

    try {

        const res = await axios.get( `https://viacep.com.br/ws/${code}/json/` );
        const location = `${res.data.bairro} - ${res.data.localidade} / ${res.data.uf}`;
        if ( res.data.erro ) return ( 'CEP informado não encontrado' );
        else return location


    } catch ( error ) {
        return ( 'CEP informado não encontrado' );
    }


}

export default getViaCep