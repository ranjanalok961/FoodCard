import { createContext, useContext, useState } from "react";

const ordercontext = createContext(false)

const OrderProvider = ({children}) =>{
    const [orderItem , setOrderItem] = useState([])
    return(
        <ordercontext.Provider value={[orderItem , setOrderItem]} >
            {children}
        </ordercontext.Provider>
    )
}

export const orderData = ()=>{
    const context = useContext(ordercontext)
    return context
}

export default OrderProvider;

