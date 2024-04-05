import React, {createContext } from "react";

export const  ShareContextData = createContext()


export default function ShareContext({costumer}) {
    return(
        <ShareContextData.Provider value={{
            data:"ishimwe"
        }} >
                {costumer}
        </ShareContextData.Provider>
    )
    

}
