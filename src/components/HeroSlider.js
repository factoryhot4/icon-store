import React , {useRef,useState,useEffect} from 'react'
import './HeroSlider.css'
import 'aos/dist/aos.css'
import Aos from 'aos';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
  
// install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);
  

function HeroSlider(){

  useEffect(()=>{
    Aos.init({duration:1000});
},[]);

    return(
    <>

    <Swiper spaceBetween={100} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false}} pagination={{ "clickable": true}}   
    navigation={true} className="mySwiper" className="hero-slide">
  
  <SwiperSlide className="banner3">
 
 <div className="content3">
     <span data-aos="fade-left">WE</span>
     <span data-aos="fade-right">DEFINE</span>
     <span data-aos="fade-left">YOUR</span>
     <span data-aos="fade-right">STYLE</span>
  </div>
</SwiperSlide>

  <SwiperSlide className="banner2">
 
    <div className="content2" data-aos="fade-up">
       <p>Giảm giá <span>20%</span> khi thanh toán <span>online</span> </p>
     </div>
  </SwiperSlide>

 

<SwiperSlide className="banner1">
    
     <div className="content1" data-aos="fade-up">
       <p>Mát - Mỏng - Nhẹ</p>
     </div>
        
     
</SwiperSlide>
  </Swiper>

  </>
    )
}

export default HeroSlider

