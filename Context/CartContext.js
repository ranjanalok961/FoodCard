// CartContext.js
import React, { createContext, useContext, useReducer, useState } from 'react';

const CartContext = createContext();

export const ItemProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([])
    const TotalCount = () => {
        return selectedItems.reduce((total, item) => {
            // const itemCount = parseInt(item.count, 10) || 0;
            return total + item.count;
        }, 0);
    };
    const getTotalCost = () => {
        return selectedItems.reduce((total, item) => {
            const itemCost = parseFloat(item.cost.replace(/[^\d.]/g, '')) || 0;
            const itemCount = parseInt(item.count, 10) || 0;
            return total + itemCost * itemCount;
        }, 0);
    };
    return (
        <CartContext.Provider value={[selectedItems, setSelectedItems, getTotalCost,TotalCount]}>
            {children}
        </CartContext.Provider>
    )
}

export const useItemContext = () => {
    return useContext(CartContext);
};