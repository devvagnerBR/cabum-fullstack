import React from 'react'

const usePaymentCheck = ( paymentOption ) => {

    switch ( paymentOption ) {
        case '1':
            return 'PIX';
            break;
        case '2':
            return 'Boleto Bancário';
            break;
        case '3':
            return 'Cartão de Crédito';
            break;
        default:
            return 'Método de pagamento inválido'
    }

}

export default usePaymentCheck