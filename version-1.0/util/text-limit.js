export const textLimit = ( text,limit ) => {
    if ( text.length <= limit ) {
        return text;
    } else {
        return text.slice( 0,limit ) + '...'
    }
}

