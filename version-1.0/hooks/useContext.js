import React from "react";
import { GlobalContext } from "../context";

export const myContext = () => {

    const value = React.useContext( GlobalContext )
    return value
    
}
