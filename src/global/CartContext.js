import React,{useReducer} from 'react';
import CartReducer from './CartReducer'

const CartContext = React.createContext();

const defaultState={
    shoppingCart:[],
    totalPrice:0,
    quantity:0,
};

const CartProvider = ({children}) =>{

    const [cart,dispatch] = useReducer(CartReducer,defaultState)

    return(
        <CartContext.Provider  value={{...cart,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider,CartContext};