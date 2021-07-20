import React from "react";
import './Contact.css'


function Contact() {
    return(
        <div className="contact-section">
            <div className="contact-content">

                <div className="contact-item">
                    <div className="item-icon">
                        <span><i class="fas fa-phone"></i></span>
                    </div>
                    <div className="item-content">
                        <div className="item-content-1">HOTLINE</div>
                        <div className="item-content-2">02.345.323.67</div>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="item-icon">
                        <span><i class="fas fa-envelope"></i></span>
                    </div>
                    <div className="item-content">
                        <div className="item-content-1">EMAIL</div>
                        <div className="item-content-2">icon@icon.me</div>
                    </div>
                </div>

                <div className="contact-item-icon">
                   <div className="contact-icon">
                        <span><i className="fab fa-facebook-f"></i></span>
                   </div>
                   <div className="contact-icon">
                        <span><i className="fab fa-youtube"></i></span>
                    </div>
                    <div className="contact-icon">
                        <span><i className="fab fa-instagram"></i></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;