import React,{useEffect} from "react";
import './NewCollectionSlider.css'
import 'aos/dist/aos.css'




import item1 from '../assets/NewCollection/item1.jpg'
import item2 from '../assets/NewCollection/item2.jpg'
import item9 from '../assets/NewCollection/item9.jpg'
import item4 from '../assets/NewCollection/item4.jpg'
import item5 from '../assets/NewCollection/item5.jpg'
import item6 from '../assets/NewCollection/item6.webp'
import item7 from '../assets/NewCollection/item7.webp'
import item8 from '../assets/NewCollection/item8.webp'

import {Link} from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);





function NewCollectionSlider() {
   

    return (
        <div className="section">
            <p className="title">SẢN PHẨM MỚI</p>
<div className="container">

<Swiper slidesPerView={1} spaceBetween={10}  loop={true} loopFillGroupWithBlank={true} 
pagination={{  "clickable": true  }} 
navigation={true} 
className="mySwiper"

breakpoints={{
    "640": {
      "slidesPerView": 2,
      "spaceBetween": 30
    },
    "768": {
      "slidesPerView": 3,
      "spaceBetween":30
    },
    "1024": {
      "slidesPerView": 4,
      "spaceBetween": 20
    }
  }}


>


<SwiperSlide className="collection-swiper" >
    <div className="image">
        <img src={item1}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Quần short Kaki Vintage</h3>
        <div className="price">
            299.000đ
        </div>
    </div>
</SwiperSlide>

<SwiperSlide className="collection-swiper" >
<div className="image">
        <img src={item2}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Khẩu trang Weekdays</h3>
        <div className="price">
           35.000đ
        </div>
    </div>
</SwiperSlide>

<SwiperSlide className="collection-swiper" >
<div className="image">
        <img src={item9}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Mũ lưỡi trai Baseball</h3>
        <div className="price">
            149.000đ
        </div>
    </div>
</SwiperSlide >

<SwiperSlide className="collection-swiper" >
<div className="image">
        <img src={item4}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Áo polo siêu nhẹ</h3>
        <div className="price">
            219.000đ
        </div>
    </div>
</SwiperSlide>

<SwiperSlide className="collection-swiper" >
<div className="image">
        <img src={item5}/>
    </div>
    <div className="info">
        <h3 className="sub-title">RUMORE SHIRT</h3>
        <div className="price">
            490.000đ
        </div>
    </div>
</SwiperSlide>

<SwiperSlide className="collection-swiper">
<div className="image">
        <img src={item6}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Quần Short Kaki Trơn Lưng Thun Ống Suông</h3>
        <div className="price">
            359.000đ
        </div>
    </div>
</SwiperSlide>

<SwiperSlide className="collection-swiper">
<div className="image">
        <img src={item7}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Áo sơ mi Flannel tay dài</h3>
        <div className="price">
            359.000đ
        </div>
    </div>
</SwiperSlide>

<SwiperSlide className="collection-swiper">
<div className="image">
        <img src={item8}/>
    </div>
    <div className="info">
        <h3 className="sub-title">Nón lưỡi trai rách viên đen</h3>
        <div className="price">
            249.000đ
        </div>
    </div>
</SwiperSlide>


</Swiper>

</div>
        <span className="category">
           <Link to="/new-collection" className="content">Xem Thêm</Link>
        </span>
        </div>
       
      )
};

export default NewCollectionSlider;