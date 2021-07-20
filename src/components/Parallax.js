import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';
import paralax from '../assets/paralax1.jpg'

import {Link} from 'react-router-dom'
import './Newletter.css'

const Parallax = ()=>{
    return(
        <ParallaxProvider>

            <Parallaximg imgsrc={paralax} height="600px" opacity="0.5" >
            <div className="subcribe" style={{position:'absolute'}}>
                 <form>
                 <h1>Gia Nhập Với Chúng Tôi</h1>
                 <p>
                Nhập địa chỉ email để có thể nhận được thông tin ưu đãi hàng ngày
                </p>
                    <div className="email-box">
                    <i className="fas fa-envelope"></i>
                     <input className="email-icon" type="email" placeholder="Mời bạn nhập email"/>
                     <Link to="/" className="button">ĐĂNG KÍ</Link>
                     </div>
                 </form>
             </div>
                
            </Parallaximg>

        </ParallaxProvider>
    )
}


export default Parallax