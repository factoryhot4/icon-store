import React,{useEffect} from "react";
import './GalleryBanner.css'
import bannerAo from '../assets/bannerAo.jpeg';
import bannerNew from '../assets/bannerNew.jpeg';
import bannerSale from '../assets/bannerSale.jpeg';
import bannerQuan from '../assets/bannerQuan.jpeg';
import bannerTat from '../assets/bannerTat.jpeg';
import {Link} from 'react-router-dom';
import 'aos/dist/aos.css'
import Aos from 'aos';

function GalleryBanner() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div className="image-gallery">

            <div className="image-box" data-aos="flip-left">
                <img src={bannerAo}/>
                <div className="overlay">
                    <div className="details">
                        <h2 className="title">
                            <p>Áo</p>
                        </h2>
                        <span className="category">
                            <Link to="./ao-so-mi">Khám phá</Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="image-box" data-aos="flip-down">
                <img src={bannerQuan}/>
                <div className="overlay">
                    <div className="details">
                        <h2 className="title">
                            <p>Quần</p>
                        </h2>
                        <span className="category">
                        <Link to="/quan">Xem ngay</Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="image-box" data-aos="flip-right">
                <img src={bannerTat}/>
                <div className="overlay">
                    <div className="details">
                        <h2 className="title">
                            <p>Phụ Kiện</p>
                        </h2>
                        <span className="category">
                            <Link to="/tat">Xem thêm</Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="image-box" data-aos="flip-left">
                <img src={bannerSale}/>
                <div className="overlay">
                    <div className="details">
                        <h2 className="title">
                            <p>Hàng Sale Off</p>
                        </h2>
                        <span className="category">
                            <Link to="/SaleOff">Xem chi tiết</Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="image-box" data-aos="flip-right">
                <img src={bannerNew}/>
                <div className="overlay">
                    <div className="details">
                        <h2 className="title">
                            <p>New collection</p>
                        </h2>
                        <span className="category">
                            <Link to="/new-collection">Đừng bỏ lỡ</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryBanner;