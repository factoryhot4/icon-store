import React,{useEffect} from "react";
import './Review.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import review2 from '../assets/Review/review2.jpg'
import review3 from '../assets/Review/review3.jpg'
import review4 from '../assets/Review/review4.jpg'
import review5 from '../assets/Review/review5.jpg'
import 'aos/dist/aos.css'
import Aos from 'aos';




import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);


function Review() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div className="review-section">
            <div className="review-title">
                <div className="review-pic">
                    <div className="title-content">
                        <p>KHÁCH HÀNG NÓI VỀ ICON</p>
                    </div>
                </div>
            </div>

            <div className="review-container">
            <Swiper spaceBetween={0} centeredSlides={true} 
            autoplay={{"delay": 4000, "disableOnInteraction": false}}
             pagination={{"clickable": true}}
               className="myS">

            <SwiperSlide>
               <div className="review-item">
                    <div className="sub-item" data-aos="slide-left">
                        <div className="sub-item-review">
                            

                            <div className="stars">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                            <p>
                             Cảm ơn Icon đã tạo cơ hội cho mình được trải nghiệm sản phẩm với
                             mức giá ưu đãi, nếu không có thể mình sẽ không biết Việt Nam có một
                             thương hiệu tuyệt vời như vậy, sản phẩm cực kì chất lượng, từ box
                             cho đến phần nhìn rồi đến lúc mặc, cực kì thoải mái, chất lượng vượt
                            mức giá và chắc chắn không hề đắt với những người đã đi làm.
                            </p>
                            <p>Hoàng Quang Trung</p>

                           
                        </div>

                        <div className="sub-item-pic">
                            <img src={review2}/>
                        </div>
                    </div>

                    <div className="sub-item" data-aos="slide-right">
                        <div  className="sub-item-review">

                       
                            <div className="stars">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                            <p>
                            
                                        Mình đã mua set này về mặc thấy rất thích. Vải xịn, mặc thoáng mát,
                                        không nóng nực. Sợi vải mềm, co giãn tốt. Còn quần thì dày, cho cảm
                                        giác cao cấp, màu đẹp nữa. Đặc biệt giao cực nhanh luôn, sáng nhân
                                        viên gọi để xác nhận, chiều 5h mình nhận được hàng rồi. Hàng đóng
                                        gọi đẹp và chỉn chu, mình rất thích. Chỉ có quần boxer đai quần bóp
                                        hơi chật với mình thôi. Và mình thấy giá rất cạnh tranh, combo này
                                        có lẽ là best choice rồi. Mình chắc chắn sẽ quay lại gom thêm vài
                                        set này nữa, vì mình đơn giản, y như set này vậy =)))
                                    
                            </p>
                            <p>Tạ Anh Quân</p>
                       

                        </div>
                        <div className="sub-item-pic">
                            <img src={review3}/>
                        </div>
                    </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="review-item">
                    <div className="sub-item" data-aos="slide-left">
                        <div className="sub-item-review">

                        
                            <div className="stars">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                            <p>
                             
                            Sản phẩm rất ưng ý. Đóng gói chuyên nghiệp.
                                        Một người mua hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất
                                        lượng, đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ
                                        chuyên nghiệp là điều quan trọng nhất, thái độ phục vụ tốt sẽ làm
                                        khách hàng hài lòng, và sẽ giới thiệu cho nhiều người
                                        khác
                                         doanh thu tăng trưởng
                                        Các bạn đang làm rất tốt điều đó, cố gắng phát huy và nâng cấp phục
                                        vụ lên nhé
                                        Chúc các bạn thành công hơn nữa..
                                    
                            </p>
                            <p>Trung Nguyễn Hữu</p>
                       
                        </div>

                        <div className="sub-item-pic">
                            <img src={review4}/>
                        </div>
                    </div>

                    <div className="sub-item" data-aos="slide-right">
                        <div  className="sub-item-review">
                        
                            <div className="stars">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                            <p>
                            
                            Mình đã biết đến thương hiệu Icon được một thời gian nhưng gần
                                        đây mới mua đơn hàng đầu tiên. Mình mua 2 áo  này với mã
                                        khuyến mãi dành cho khách hàng mới. Mình đã rất ấn tượng khi nhận
                                        được gói hàng, từ chiếc hộp đen in tên thương hiệu và mã QR trông
                                        đơn giản nhưng tinh tế, đến cách 2 chiếc áo được xếp gọn gàng. Quả
                                        thật ấn tượng đầu tiên là một yếu tố quan trọng trong trải nghiệm
                                        khách hàng. Khi cầm sản phẩm trên tay, Icon đã làm mình bất ngờ
                                        hơn vì chất liệu và mức độ hoàn thiện trong gia công...
                                    
                            </p>
                            <p>Hoàng Trung Hiếu</p>
                   
                        </div>

                        <div className="sub-item-pic">
                            <img src={review5}/>
                        </div>
                    </div>
               </div>
            </SwiperSlide>

            </Swiper>
            </div>
        </div>
    );
};

export default Review;