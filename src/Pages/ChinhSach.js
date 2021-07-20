import React,{useState} from "react";
import './ChinhSach.css';
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import {useEffect } from 'react'
import PopUp from '../components/PopUp'


function ChinhSach() {

    const [isLoading,setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(!isLoading)
        },2500);
        
    },[])

    if(isLoading){
        return <Loading/>
    } 


//     const [isOpen,setisOpen] = useState(false)

//   useEffect(()=>{
//     setTimeout(()=>{
//         setisOpen(!isOpen)
//     },6000)
   
//   },[])

  


    return(
        <>
        {/* <PopUp/> */}
        <div className="chinh-sach-title">
            Chính sách đổi trả
        </div>
        <div className="chinh-sach-section">

            <div className="chinh-sach-header">
                <h1>Chính sách đổi trả và bảo hành</h1>
                <div><p>Nhằm mang lại các dịch vụ hậu mãi tốt nhất cho khách hàng mua sắm tại hệ thống củu ICON , từ ngày 1/10 ICON có chính sách ĐỔI TRẢ và BẢO HÀNH như sau:</p></div>
            </div>

            <div className="chinh-sach-doi-hang">
                <h1>I. Chính Sách Đổi Hàng:</h1>
                <div className="chinh-sach-doi-hang-content">
                    <p>Áp dụng 01 lần đổi/1 đơn hàng</p>
                    <p>Sản phẩm đổi trong thời gian 5 ngày kể từ ngày mua hàng trên hoá đơn(đối với khách mua hàng trực tiếp tại cửa hàng), 7 ngày kể từ ngày nhận hàng (đối với khách mua trên online)</p>
                    <p>Sản phẩm phải còn nguyên tem , tags và mang theo hoá đơn mua hàng,sản phẩm không bị dơ bẩn , hư hỏng bởi nhũng tác nhân bên ngoài cửa hàng sau khi mua hàng.</p>
                    <p>Có thể đổi sang sản phẩm bất kì. Nếu có sự chênh lệch về giá ICON sẽ tính bù trừ.</p>
                    <p>Có thể đổi 1 sản phẩm sang nhiều sản phẩm.</p>
                    <p>Sản phẩm mua trong CTKM quá khách vui lòng đổi trong CTKM để được áp dụng ưu đãi , khi kết thúc CTKM sẽ áp dụng đổi trên giá đang được niêm yết(Không hỗ trợ đổi hàng đối với sản phẩm giảm giá 30% trở lên).</p>
                    <p>Không áp dụng đối với sản phẩm là phụ kiên: tất, mũ ,khẩu trang</p>
                </div>
            </div>

            <div className="chinh-sach-doi-hang">
                <h1>II. CHÍNH SÁCH ĐỔI DO LỖI KĨ THUẬT VÀ HOÀN TIỀN:</h1>
                <div className="chinh-sach-doi-hang-content">
                    <div className="check-item">
                        <h2><span><i class="fas fa-check"></i></span>ĐIỀU KIỆN ÁP DỤNG</h2>
                        <ul>
                            <li>Sản phẩm lỗi kĩ thuật: Ổ màu , chất liệu , kiểu dáng , bung keo...</li>
                            <li>Sản phẩm không giống mô tả hoặc khong giống hình</li>
                        </ul>
                    </div>
                    <div className="x-item">
                        <h2><span><i class="fas fa-times"></i></span>TRƯỜNG HỢP KHÔNG ĐƯỢC GIẢI QUYẾT</h2>
                        <ul>
                            <li>Sản phẩm đã qua sử dụng</li>
                            <li>Đói với sản phẩm lỗi kĩ thuật phải phản hồi đến ICON trong vòng 07 ngày, kể từ ngày mua hàng trên hoá đơn đối với khách hàng mua trực tiếp tại cửa hàng, 07 ngày kể từ nhận hàng đối với khách mua online . Sau thời gian 07 ngày không tiếp nhận đổi trả , sẽ được hỗ trợ sang chính sách bảo hành</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="chinh-sach-doi-hang">
                <h1>III. CHÍNH SÁCH BẢO HÀNH:</h1>
                <h2><span><i class="fas fa-check"></i></span>CÁC TRƯỜNG HỢP VÀ THỜI GIAN BẢO HÀNH</h2>
                <div className="chinh-sach-table">
                    <div className="chinh-sach-table-item">
                        <div><h3>TÊN SẢN PHẨM</h3></div>
                        <div><p>Quần, Áo,Nón</p></div>
                        <div><p>Thắt lưng</p></div>
                        <div><p>Ba lô,Ví,Túi Xách</p></div>
                        <div><p>Giày Dép</p></div>
                    </div>

                    <div className="chinh-sach-table-item"> 
                        <div><h3>ĐIỀU KIỆN BÀO HÀNH</h3></div>
                        <div><p>Đường chỉ , dây kéo,khuy...</p></div>
                        <div><p>Gãy ốc,nổ da tự nhiên</p></div>
                        <div><p>Đường chỉ,quai túi,keo,khoá</p></div>
                        <div><p>Đường chỉ,keo</p></div>
                    </div>

                    <div className="chinh-sach-table-item">
                        <div><h3>THỜI GIAN BẢO HÀNH</h3></div>
                        <div><p>7 ngày</p></div>
                        <div><p>15 ngày</p></div>
                        <div><p>15 ngày</p></div>
                        <div><p>15 ngày</p></div>
                    </div>
                </div>
                <h2><span><i class="fas fa-times"></i></span>CÁC TRƯỜNG HỢP KHÔNG ĐƯỢC BẢO HÀNH</h2>
                <ul className="table-footer">
                    <li>Giặt tẩy sản phẩm không đúng theo quy cách</li>
                    <li>Sản phẩm bị ảnh hưởng bới tác dụng của hoá chất , ảnh hưởng đến màu sắc , form dáng , hình dạng.</li>
                    <li>Sản phẩm bị rách , trầy xước , bị biến dạng do tiếp xúc với nhiệt độ cao hoặc bị ẩm ướt lâu ngày và liên tục , bị tác động bởi vật cứng, sắc nhọn, hoặc sản phẩm bị thú vật cắn</li>
                    <li>Sản phẩm là : tất, khẩu trang</li>
                    <li>Sản phẩm bị tác động bởi tai nạn , thiên tai...</li>
                </ul>
            </div>

            <div className="chinh-sach-doi-hang">
                <h1>IV. CHI PHÍ ĐỔI HÀNG:</h1>
                 <ul className="chi-phi-doi-hang">
                    <li>Miễn phí đổi hàng cho khác mua sắm tại ICON trong trường hợp bị lỗi từ nhà sản xuất , giao nhầm hàng, hư hỏng trong quá trình vận chuyển.</li>
                    <li>Trong trường hợp không vừa size, không vừa màu , mẫu ... Khách hàng mua online vui lòng hỗ trợ 2 chiều phí vận chuyển đổi hàng (phí ICON gửi hàng lại là 30.000đ).</li>
                 </ul>
            </div>

            <div className="chinh-sach-footer">
                <p>****</p>
                <h3>Trong mọi trường hợp, quyết định của ICON là quyết định cuối cùng</h3>
                <h1>XIN CHÂN THÀNH CẢM ƠN VÀ HÂN HẠNH ĐƯỢC PHỤC VỤ QUÝ KHÁCH</h1>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ChinhSach;