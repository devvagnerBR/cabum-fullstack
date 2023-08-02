import React from 'react'
import moment from 'moment';


const convertTimeInDate = ( time ) => {

  const timeObject = new Date( Number(time) )
  const formattedDate = moment( timeObject ).format( 'DD/MM/YYYY' )
  return formattedDate

}

export default convertTimeInDate