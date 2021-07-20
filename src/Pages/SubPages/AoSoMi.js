import React,{useContext,useEffect,useState} from "react";
import './AoStyle.css'
import SomiBanner from '../../componentsShirt/SomiBanner';
import {ProductContext} from '../../global/ProductsContext';
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'
import {CartContext} from '../../global/CartContext'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Loading from '../../components/Loading'

function AoSoMi() {
    const {SoMiProducts} = useContext(ProductContext)
    const {dispatch} = useContext(CartContext)

    useEffect(()=>{
        Aos.init({duration:3000});
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
            <SomiBanner/>
            <div className="products-section" data-aos="zoom-out-up" >
                {SoMiProducts.map((item)=>{
                    return(
                        <div key={item.id} className="grid-item">
                            <div className="card">
                                <img className="card-img" src={item.image}/>
                            </div>

                            <div className="card-content">
                                <p className="card-name">{item.name}</p>
                                <h1 className="card-price">{item.price}.000đ</h1>
                                <button className="card-btn" onClick={()=>dispatch({type:"ADD_TO_CART" , id:item.id , product:item})}>
                                    Chọn mua
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default AoSoMi;