import React from "react";
import './Policy.css'


function Policy() {
    return(
        <div className="policy-section">
            <div className="policy-content">

            <div className="policy-item">
                <div className="policy-icon">
                    <span><i class="fas fa-clock"></i></span>
                </div>
                <div className="policy">
                    <p>
                        Giao hàng <span>24h</span> ở HN và HCM 2-3 ngày ở tỉnh khác
                    </p>
                </div>
            </div>

            <div className="policy-item">
                <div className="policy-icon">
                    <span><i class="fas fa-truck-moving"></i></span>
                </div>
                <div className="policy">
                    <p>
                         Miễn phí vận chuyển <span> Cho đơn hàng trên 500k</span>
                    </p>
                </div>
            </div>

            <div className="policy-item">
                <div className="policy-icon">
                    <span><i class="fas fa-undo-alt"></i></span>
                </div>
                <div className="policy">
                    <p>
                        <span>60 ngày</span> đổi trả vì bất kì lý do gì
                    </p>
                </div>
            </div>

            <div className="policy-item">
                <div className="policy-icon">
                    <span><i class="fas fa-home"></i></span>
                </div>
                <div className="policy">
                    <p>
                        Đến <span>tận nơi</span> nhận hoàn trả, hoàn tiền trong <span>24h</span>
                    </p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Policy;