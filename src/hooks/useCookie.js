
import Cookies from 'js-cookie'

//const expireDate = new Date( new Date().getTime() + expiresTime * 60 * 1000 )

export const setCookie = ( name,value,expiresAt ) => {
    Cookies.set( name,value,{ expires: expiresAt } )
}

export const removeCookie = ( name ) => {
    Cookies.remove( name )
}

export const getCookie = ( name ) => {
    const value = Cookies.get( name )
    return value
}