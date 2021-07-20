import React,{useContext,useState,useEffect} from "react";
import ShortBanner from '../componentsQuan/ShortBanner';
import {ProductContext} from '../global/ProductsContext'
import Footer from '../components/Footer'
import './SubPages/AoStyle.css'
import Contact from '../components/Contact'
import {CartContext} from '../global/CartContext'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Loading from '../components/Loading'
function Quan() {
    const {ShortProducts} = useContext(ProductContext)
    const {dispatch} = useContext(CartContext)

    const [visible,setVisible] = useState(8);

    const showMoreItems =(e)=>{
        setVisible((preValue)=> preValue + 8);
        
    }

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
            <ShortBanner/>
            <div className="products-section">
                {ShortProducts.slice(0,visible).map((item)=>{
                    return(
                        <div key={item.id} className="grid-item" data-aos="flip-down">
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
                { visible < ShortProducts.length &&
            <div onClick={showMoreItems} className="load-more">Hiển thị thêm</div>
                }
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Quan;