import { createContext, useContext, useState } from "react";

const datacontext = createContext(false)

const contextProvider = ({children}) =>{
    const [sign ,setSign] = useState('')
    return(
        <datacontext.Provider value={[sign ,setSign]} >
            {children}
        </datacontext.Provider>
    )
}

export const useData = ()=>{
    const context = useContext(datacontext)
    return context
}

export default contextProvider;

