import React from 'react';
import './PopUp.css'
import img from '../assets/dangnhap.jpg'

export default function PopUp({closeModal}){
    return(
        <>
            <div className="overlay-popup">
                <div className="popup">
                   <div className="popup-img"><img  src={img}/></div>
                   <div className="popup-form">
                      
                            <span className="popup-icon" onClick={closeModal} ><i class="fas fa-times"></i></span>
                            <h2>ICON COMMUNITY</h2>
                            <h2>JOIN US!</h2>
                            <p>Nhập địa chỉ email để nhận những thông tin ưu đãi mới nhât và nhận code giảm giá <span>20%</span> cho lần mua hàng đầu tiên của bạn nhé</p>
                            <input type="email" placeholder="Email của bạn"/>
                            <div className="popup-btn">Nhận code giảm giá</div>
                        
                   </div>
                </div>  
            </div>
        </>
    )
}