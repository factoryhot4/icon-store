
const CartReducer =(state,action) =>{

    const {shoppingCart,quantity,totalPrice} = state
    let product;
    let updatedPrice;
    let updatedQuantity;
    let index;
    if(action.type === "ADD_TO_CART"){
        const check = shoppingCart.find(product => product.id === action.id)
        if(check){
            return state
        }else {
            product = action.product;
            updatedPrice = totalPrice + product.price;
            updatedQuantity = quantity + 1;
           product['qty'] = 1;
            return { shoppingCart : [...shoppingCart,product] , totalPrice : updatedPrice , quantity : updatedQuantity }
        }
    };
    if(action.type === 'ADD'){
        let cloneShoppingCart = [...shoppingCart].map(product =>{
            if (product.id === action.cart.id){
                return{
                    
                        ...product,
                        qty:product.qty + 1
                    }
                
            }
            return product
        });
        
        
        updatedPrice = totalPrice + action.cart.price;
        updatedQuantity = 1 + quantity;
       

        return { shoppingCart : [...cloneShoppingCart], totalPrice : updatedPrice , quantity : updatedQuantity}
    };


    if(action.type ==="SUBTRACT"){
        
        if( action.cart.qty > 1){
            let cloneShoppingCart = [...shoppingCart].map(product =>{
                if (product.id === action.cart.id){
                    return{
                        
                            ...product,
                            qty:product.qty - 1
                        }
                    
                }
                return product
            });
            updatedPrice = totalPrice - action.cart.price;
            updatedQuantity = quantity -  1;
            


            return { shoppingCart : [...cloneShoppingCart], totalPrice : updatedPrice , quantity : updatedQuantity}


        }else{
         return state;
        }
    };


    if(action.type === "DELETE"){
        let filtedArray = shoppingCart.filter(item => item.id !== action.id)
        product = action.cart;
        updatedQuantity = quantity - product.qty;
        updatedPrice = totalPrice - product.price* product.qty;

        return {shoppingCart: [...filtedArray], totalPrice : updatedPrice , quantity : updatedQuantity}

    };
    if(action.type ==="CLEAR"){
        return {shoppingCart:[],totalPrice:0,quantity:0}
    }

    return state
}

export default CartReducer;
