import React,{useContext,useState,useEffect} from "react";
import './Cart.css'

import {Link} from 'react-router-dom'
import {CartContext} from '../global/CartContext'
import Footer from '../components/Footer';
import Contact from '../components/Contact'
import ComfirmModal from '../components/ConfirmModal'
import Loading from '../components/Loading'

function Cart() {

    const {shoppingCart ,dispatch,quantity,totalPrice}= useContext(CartContext)

    const pay = ()=>{
        dispatch({type:"CLEAR"});
        setIsLoading(!isLoading);
        setIsOpen(!isOpen);

    }

    function handleSubmit(event) {
        event.preventDefault();
      }

      const [isOpen,setIsOpen] = useState(false)

     
       const closeComfirm =()=>{
           setIsOpen(false)
       }
    
       const [isLoading,setIsLoading] = useState(false)
       useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false)
        },2500);
        
    },[isLoading])
   
       if(isLoading){
           return <Loading/>
       } 


    return(
        <>
        {isOpen? <ComfirmModal closeComfirm={closeComfirm}/> : ''}
        <div className="product-cart">

            <h4 className="page-banner-sm">Giỏ hàng</h4>
            <hr className="hr-style"/>

            <div className="wrapper">

                {shoppingCart.length > 0? 
                    
                    <div className="cart-collection">
                        <div className="cart-header">
                            <p>Sản phẩm</p>
                            <p>Số lượng</p>
                            <p>Giá tiền</p>
                            <p>Tổng tiền</p>
                        </div>
                    
                    {shoppingCart.map( cart=>{
                        return(
                            <div className="cart-item"> 
                            <form onSubmit={handleSubmit}>
                                <div className="cart-product">
                                    <div className="cart-image"> <img src={cart.image}/> </div>
                                    <div className="cart-product-info">
                                        <p className="cart-product-name">{cart.name}</p>
                                        <p className="cart-price-sm">{cart.price}.000đ</p>
                                        <small>x 1</small>
                                    </div>
                                </div>
                                <div className="cart-quantity-md">
                                    <div className="cart-quantity-controls">
                                        <span onClick = {()=>dispatch({type:"SUBTRACT" , id: cart.id  ,cart:cart})}>
                                            -
                                        </span>
                                        <span className="quantity">{cart.qty}</span>
                                        <span onClick={()=>dispatch({type :"ADD", id: cart.id, cart: cart})}>
                                            +
                                        </span>
                                    </div>
                                </div>
                                <div className="cart-unit-price">
                                    <h4>{cart.price}.000đ</h4>
                                </div>
                                <div className="cart-product-total">
                                    <h4>{cart.price * cart.qty}.000đ <span title="Xoá" onClick = {()=> dispatch({type:"DELETE" , id: cart.id , cart: cart})} ><i class="far fa-times-circle"></i></span></h4>
                                </div>
                               
                                <div className="cart-controls-sm">
                                    <div className="remove"  onClick = {()=> dispatch({type:"DELETE" , id: cart.id , cart: cart})}>
                                        <span><i class="far fa-trash-alt"></i></span> Remove
                                    </div>
                                    <div className="cart-quantity-controls-sm">
                                        <span onClick = {()=>dispatch({type:"SUBTRACT" , id: cart.id  ,cart:cart})}>
                                            -
                                        </span>
                                        <span className="quantity">{cart.qty}</span>
                                        <span onClick={()=>dispatch({type :"ADD", id: cart.id, cart: cart})}>
                                            +
                                        </span>
                                    </div>  
                                </div>
                            </form>
                        </div>  
                    
                        )
                    })
                    }
                    </div>
                    : <div className="cart-message">Hiện chưa có sản phẩm</div>
                }

                {shoppingCart.length > 0 ? 

                <div className="cart-total-holder">
                    <div className="cart-total">
                        <p>TỔNG TIỀN:  </p>
                        <p>{totalPrice}.000đ</p>
                    </div>

                    <div className="cart-action-button">
                        <Link to="/">TIẾP TỤC MUA HÀNG</Link>
                        <button  onClick={pay}>THANH TOÁN</button>
                    </div>
                </div>
                : 

                
              
                <div className="cart-0">
                <div className="cart-action-button ">
                    <Link to="/" >TIẾP TỤC MUA HÀNG</Link>
                    
                </div>
                </div>

                }

            </div>
        </div>
        <Contact/>
        <Footer/>
        </>
    );
};

export default Cart;