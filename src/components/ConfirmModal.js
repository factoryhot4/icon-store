import React from 'react'
import './ConfirmModal.css'

export default function ConfirmModal({closeComfirm}){
    return (
        <>
            <div className="overlay-confirm">
                <div className="confirm-modal">
                    
                        <div className="confirm-wrapper-icon">
                            <span className="confirm-icon"><i class="far fa-check-circle"></i></span>
                        </div>
                        <h2>Tuyệt vời!</h2>
                         <p>Thanh toán thành công!</p>
                        <div className="confirm-btn" onClick={closeComfirm}>Xác nhận</div>
                 
                  
                </div>
            </div>
        </>
    )
}