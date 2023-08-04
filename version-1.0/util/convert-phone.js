const formatPhone = ( telefone ) => {

    const numeroLimpo = String( telefone ).replace( /\D/g,'' );
    const regex = /^(\d{2})(\d{5})(\d{4})$/;
    const telefoneFormatado = numeroLimpo.replace( regex,'($1) $2-$3' );
    return telefoneFormatado;
}


export default formatPhone