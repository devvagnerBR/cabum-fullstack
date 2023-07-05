import React from 'react'
import moment from 'moment';
import 'moment/dist/locale/pt-br';

const countdownTime = () => {

    const [countdown,setCountdown] = React.useState( null );

    React.useEffect( () => {

        // const futureDate = moment( '2023-07-30' );
        // const interval = setInterval( () => {
        //     const now = moment();
        //     const diff = futureDate.diff( now );

        //     if ( diff <= 0 ) {
        //         clearInterval( interval );
        //         setCountdown( null );
        //     } else {
        //         const duration = moment.duration( diff );
        //         setCountdown( {
        //             days: duration.days(),
        //             hours: duration.hours().toString().padStart( 2,'0' ),
        //             minutes: duration.minutes().toString().padStart( 2,'0' ),
        //             seconds: duration.seconds().toString().padStart( 2,'0' )
        //         } );
        //     }
        // },1000 );

        // return () => {
        //     clearInterval( interval );
        // };
    },[] );


    return { countdown }
}

export default countdownTime