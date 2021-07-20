import React,{useState} from "react";
import Footer from '../components/Footer'
import './FAQS.css'
import Loading from '../components/Loading'
import {useEffect } from 'react'
function FAQS() {

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
        <>
        <div className="faqs-section">

            <div className="faqs-header">
                <p>CÂU HỎI THƯỜNG GẶP KHI MUA SẮM TẠI ICON</p>
            </div>

            <div className="faqs-1">
                <h1>Về việc giao hàng của ICON</h1>

                <div className="faqs-item-1 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Bao lâu từ lúc đặt hàng thì tôi có thể nhận được hàng?</p>
                        <p>Nếu ở nội thành Hà Nội và Hồ Chí Minh, khách hàng sẽ được nhận hàng trong vòng 24h kể từ khi có cuộc gọi hoặc tin nhắn xác nhận trừ trường hợp đơn chưa đủ tồn kho ICON sẽ gửi đi từ kho vận hành khác tỉnh thì thời gian sẽ là 2-3 ngày.</p>
                        <p>Nếu ở tỉnh khác, khách hàng sẽ nhận được hàng trong 2-3 ngày.</p>
                        <p>Các trường hợp đơn hàng đặt trước (Pre-order) sẽ được thông báo về ngày giao hàng ở mỗi chương trình.</p>
                    </div>
                </div>

                <div className="faqs-item-2 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Làm thế nào để tôi có thể theo dõi đơn hàng ?</p>               
                        <p>Khách hàng có thể inbox vào fanpage ICON với thông tin mã đơn hàng hoặc số điện thoại đặt hàng, chăm sóc khách hàng sẽ gửi đến khách hàng mã vận đơn trong thời gian sớm nhất.</p>
                    </div>
                </div>

                
                <div className="faqs-item-3 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Khung giờ giao hàng của ICON?</p>               
                        <p>ICON giao giờ hành chính, một số khu vực có thể hỗ trợ giao tối cho khách hàng. ICON không cam kết có thể hỗ trợ các trường hợp giao tối 100% tuy nhiên ICON chắc chắn sẽ làm mọi cách có thể hỗ trợ cho khách hàng.</p>
                    </div>
                </div>

            </div>

            <div className="faqs-2">
                
                <h1>Trải nghiệm mua hàng trực tiếp</h1>

                <div className="faqs-item-1 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>ICON có cửa hàng không ?</p>               
                        <p>Hiện tại ICON có 3 shop vận hành và có hỗ trợ khách hàng mua trực tiếp tại shop để có những trải nghiệm thực tế nhất</p>
                        <p>Địa chỉ:</p>
                        <p>+ 12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh</p>
                        <p>+ 484, Đường Lê Văn Sỹ, Phường 14, Quận.3, Tp. Hồ Chí Minh</p>
                        <p>+ Số 103, Đường Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, TP. Hà Nội</p>
                        <p>Giờ làm việc: 8h30 - 17h30 các ngày trừ Chủ nhật và ngày lễ.</p>
                    </div>
                </div>

                <div className="faqs-item-2 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Chính sách giá được áp dụng như thế nào khi tôi mua trực tiếp ?</p>               
                        <p>Mọi đơn hàng của khách hàng đều được tính giá như giá trên website. Khách hàng yên tâm, các mã giảm giá chương trình quà tặng,... vẫn được hỗ trợ như khi đặt online.</p>
                    </div>
                </div>

                <div className="faqs-item-3 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Các hình thức thanh toán khi tôi mua hàng trực tiếp là gì?</p>               
                        <p>Cũng giống như mua hàng online khách hàng mua hàng tại kho có 2 hình thức để thanh toán đơn hàng: tiền mặt hoặc chuyển khoản ngân hàng. ICON chưa áp dụng hình thức quẹt thẻ.</p>
                    </div>
                </div>

            </div>

            <div className="faqs-3">
                <h1>Đổi/trả hàng với Coolmate</h1>

                <div className="faqs-item-1 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Thế nào là đơn hàng 2 chiều?</p>               
                        <p>Đơn hàng 2 chiều điển hình ở đơn đổi hàng ở ICON, khách hàng sẽ nhận hàng mới và đồng thời gửi hàng đổi cho bưu tá giao hàng.</p>
                    </div>
                </div>

                <div className="faqs-item-2 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Tôi đổi hàng tại kho có tính ship không ?</p>               
                        <p>Không. ICON luôn hỗ trợ khách hàng với trải nghiệm tốt nhất, khách hàng có thể báo với ICON về tình trạng đổi của đơn hàng ICON sẽ đóng sẵn hàng khách hàng chỉ cần ghé kho và đổi hàng ngay.</p>
                    </div>
                </div>
            </div>

            <div className="faqs-4">
                <h1>Các vấn đề liên quan đến đơn hàng</h1>

                <div className="faqs-item-1 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Tôi muốn thay đổi thông tin với đơn hàng đã đặt (SĐT nhận hàng, địa chỉ, hình thức thanh toán,...)?</p>               
                        <p>Khách hàng inbox vào fanpage ICON hoặc gọi hotline 02.345.323.67 để chăm sóc khách hàng hỗ trợ thay đổi thông tin đơn hàng của khách hàng.</p>
                        <p>Riêng về việc thay đổi hình thức thanh toán từ COD sang thanh toán trước, ICON sẽ gởi đến khách thông tin STK:</p>
                        <p>Cong ty Co Phan Fastech Asia</p>
                        <p>0691000416134</p>
                        <p>Vietcombank CN Tây Hà Nội</p>
                        <p>Hoặc Momo: 0988360861- Phạm Chí Nhu</p>
                        <p>Ngay khi nhận được thanh toán, ICON sẽ cập nhật lại thông tin thanh toán cho khách hàng.</p>
                    </div>
                </div>

                <div className="faqs-item-2 faqs-child">
                    <div className="faqs-title">
                        <div>Hỏi:</div>
                        <div>Đáp:</div>
                    </div>
                    <div className="faqs-content">
                        <p>Tôi muốn huỷ đơn hàng đã thanh toán trước?</p>               
                        <p>Hiện tại ICON chưa thể hoàn tiền tự động cho khách hàng. Khách hàng điền thông tin ở đây hoặc inbox Fanpage hoặc gọi hotline 02.345.323.67, ICON sẽ hoàn lại tiền trong vòng 24h sau khi nhận được thông tin.</p>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    );
};

export default FAQS;