import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState(0);

    return (
        <BasketContext.Provider value={{ basketItems, setBasketItems }}>
            {children}
        </BasketContext.Provider>
    );
};
