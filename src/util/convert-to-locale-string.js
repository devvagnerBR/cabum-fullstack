const convertToLocaleString = ( value ) => {

    const convertedValue = value.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )
    return convertedValue

}


export default convertToLocaleString