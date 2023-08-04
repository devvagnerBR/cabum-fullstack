const transformTittleInSlug = ( title ) => {

    title = title.replace( /[\s,]/g,"-" );
    title = title.toLowerCase();
    return title

}

export default transformTittleInSlug