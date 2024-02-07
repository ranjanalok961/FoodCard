import { createContext, useContext, useState } from "react";

const datacontext = createContext(false)

const SearchProvider = ({children}) =>{
    const [search , setSearch] = useState('')
    return(
        <datacontext.Provider value={[search , setSearch]} >
            {children}
        </datacontext.Provider>
    )
}

export const searchData = ()=>{
    const context = useContext(datacontext)
    return context
}

export default SearchProvider;

