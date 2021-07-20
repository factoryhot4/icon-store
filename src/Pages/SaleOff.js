import React,{useContext,useState,useEffect} from "react";
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import {ProductContext} from '../global/ProductsContext';
import HangSaleBanner from '../componentsSale/HangSaleBanner'
import './SaleOff.css'
import {CartContext} from '../global/CartContext'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Loading from '../components/Loading'


function SaleOff() {

   



    const {HangSaleProducts} = useContext(ProductContext)
    const {dispatch} = useContext(CartContext)

    const [visible,setVisible] = useState(8);

    const showMoreItems =(e)=>{
     
        setVisible((preValue)=> preValue + 8);
        
    }
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);



    const [isLoading,setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(!isLoading)
        },2500);
        
    },[])

    if(isLoading){
        return <Loading/>
    } 

    return(
        <div>
            <HangSaleBanner/>
            <div className="products-section">
                {HangSaleProducts.slice(0,visible).map((item)=>{
                    return(
                        <div key={item.id} className="grid-item" data-aos="flip-up">
                             <div className="ribbon-sale">
                                {item.oldPrice >= 400 ? <span>Off 60% </span> : ''}
                                {item.oldPrice <= 379 ? <span>Off 45%</span> : ''}
                                {item.oldPrice <= 279 ? <span>Off 30%</span> : ''}
                            </div>
                            <div className="card">
                                <img className="card-img" src={item.image}/>
                            </div>

                            <div className="card-content">
                                <p className="card-name">{item.name}</p>
                                <h1 className="card-price">{item.price}.000đ <span className="old-price">{item.oldPrice}.000đ</span> </h1>
                                <button className="card-btn" onClick={()=>dispatch({type:"ADD_TO_CART" , id:item.id , product:item})}>
                                    Chọn mua
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            { visible < HangSaleProducts.length &&
            <div onClick={showMoreItems} className="load-more">Hiển thị thêm</div>
                }

            <Contact/>
            <Footer/>
        </div>
    );
};

export default SaleOff;