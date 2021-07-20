import React,{useRef,useState} from "react";
import './DangNhap.css'

import img1 from '../assets/dangnhap1.jpg';
import img2 from '../assets/dangki2.jpg'
import Loading from '../components/Loading'
import {useEffect } from 'react'
function DangNhap() {

     const containerRef = useRef(null)
        const sectionRef =useRef(null)
    
   
    const handleChange =(e)=>{
        e.preventDefault();
        containerRef.current.classList.toggle('active');
        sectionRef.current.classList.toggle('active');
    }



        function handleSubmit(event) {
            event.preventDefault();
          }

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
        
        <section className="dang-nhap-section" ref={sectionRef}>

        <div className="dang-nhap-container" ref={containerRef}>

            <div className="user signinBx">
                <div className="imgBx"><img src={img1}/></div>
                <div className="formBx">
                    <form onSubmit={handleSubmit}>
                        <h2>Đăng nhập</h2>
                        <input type="text" placeholder="Tên đăng nhập"/>
                        <input type="password" placeholder="Mật khẩu"/>
                        <input type="submit" value="Đăng nhập"/>
                        <p className="signup">Bạn đang không có tài khoản?<a href="#" onClick={handleChange}>Đăng kí</a></p>
                    </form>
                </div>
            </div>

            <div className="user signupBx">
           
                <div className="formBx">
                    <form>
                        <h2>Tạo tài khoản</h2>
                        <input type="text" placeholder="Tên người dùng"/>
                        <input type="text" placeholder="Địa chỉ email"/>
                        <input type="password" placeholder="Tạo mật khẩu"/>
                        <input type="password" placeholder="Xác nhận lại mật khẩu"/>
                        <input type="submit" value='Đăng kí'/>
                        <p className="signup">Đã có tài khoản?<a href="#" onClick={handleChange}>Đăng nhập</a></p>
                    </form>
                </div>
                <div className="imgBx"><img src={img2}/></div>
            </div>


        </div>
        </section>
    );
};

export default DangNhap;