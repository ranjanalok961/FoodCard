
import React, { createContext, useContext, useReducer, useState } from 'react';

const LikeContext = createContext();

export const LikeItemProvider = ({ children }) => {
    const [likeItem , setLikeItem] = useState([])
    return (
        <LikeContext.Provider value={[likeItem , setLikeItem]}>
            {children}
        </LikeContext.Provider>
    )
}

export const useLikecontext= () => {
    return useContext(LikeContext);
};