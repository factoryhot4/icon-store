import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom'

function footer() {
    return(
        <div className="footer-section">

            <div className="footer-content">

                <div className="footer-item-1">
                    <div className="item-title">
                        <p>HỆ THỐNG CỬA HÀNG </p>
                    </div>
                    <div className="item">
                        <p>Flagship store 1:</p>
                        <span> <i class="fas fa-map-marker-alt"></i></span>
                        12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh
                    </div>
                    <div className="item">
                        <p>Flagship store 2:</p>
                        <span> <i class="fas fa-map-marker-alt"></i></span>
                        484, Đường Lê Văn Sỹ, Phường 14, Quận.3, Tp. Hồ Chí Minh
                    </div>
                    <div className="item">
                        <p>Flagship store 3:</p>
                        <span> <i class="fas fa-map-marker-alt"></i></span>
                        Số 103, Đường Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, TP. Hà Nội
                    </div>
                    <div className="item">
                        <p>Địa chỉ công ty:</p>
                        <span> <i class="fas fa-map-marker-alt"></i></span>
                        484 Lê Văn Sỹ, Phường 14, Quận 3, Tp. Hồ Chí Minh
                    </div>
                </div>

                <div className="footer-item-2">
                    <div className="item-title">
                        <p>THÔNG TIN CÔNG TY </p>

                    </div>
                    <div className="item">
                    <p>Công ty TNHH ICON </p>
                    <p>Mã số doanh nghiệp: 0315388548.</p>
                    <p>Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư Tp. Hồ Chí Minh cấp ngày 14/11/2018</p>
                    <span>Email liên hệ:</span>
                    <div className="item-enve">
                    <span>
                        <i class="far fa-envelope"></i>
                    </span>
                        icon@icon.me
                    </div>
                    </div>
                </div>

                <div className="footer-item-3">
                     <div className="item-title">
                        <p>CHÍNH SÁCH </p>
                    </div>
                    <div className="item">
                        <Link to="/chinh-sach"> Điều khoản dịch vụ</Link>
                        <Link to="/hoi-dap" >Hỏi đáp</Link>
                    </div>
                    
                </div>

                <div className="footer-item-4">
                    <div className="item-title">
                        <p>LIÊN HỆ</p>
                    </div>

                    <div className="item">

                    <p className="item-p">TƯ VẤN BÁN HÀNG (9:00-21:30)</p>
                    <div className="item-phone">
                        <span> <i class="fas fa-phone"></i>   02873066060</span>
                    </div>
                    <p>Phím 1 - Tất cả các ngày trong tuần</p>

                    <p className="item-p">CHĂM SÓC KHÁCH HÀNG (9:00-21:00)</p>
                    <div className="item-phone">
                        <span> <i class="fas fa-phone"></i>  02873066060</span>
                    </div>
                    <p>Phím 2 - Tất cả các ngày trong tuần</p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default footer;