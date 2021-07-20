import React ,{useState,useContext,useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../assets/logo/youtube_profile_image.png'
import AoSubpages from './AoSubpages';
import PhuKienSubpages from './PhuKienSubpages';
import ChinhSachSubpages from './ChinhSachSubpages';
import {CartContext} from '../global/CartContext'

import 'aos/dist/aos.css'
import Aos from 'aos';

function Navbar(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);



    const {quantity} = useContext(CartContext)

    const [click,setClick] = useState(false)
    const [AoDropdown,setAoDropdown] = useState(false)
    const [PhuKienDropdown,setPhuKienDropdown] = useState(false)
   const [ChinhSachDropdown,setChinhSachDropdown] = useState(false)

    
    const handleClick = () =>{
        setClick(!click)
    }

    const closeMoblieMenu = ()=>{
        setClick(false)
    }
// close moble menu: mặc định sẽ đóng bảng menu khi width đang ở 960px;
// muốn mở lại hãy thay đổi trạng thái của menu-icon về true => nav-menu active sẽ đc gọi


    const toggleSubmenuAo = ()=>{
        setAoDropdown(!AoDropdown)
    }

    const toggleSubmenuPhukien=()=>{
        setPhuKienDropdown(!PhuKienDropdown)
    }

    const toggleSubmenuChinhsach=()=>{
        setChinhSachDropdown(!ChinhSachDropdown)
    }

    // const onMouseEnterAo =()=>{
    //    setAoDropdown(true);
      
    // }

    const onMouseLeaveAo = () => {
       setAoDropdown(false)
      };

    // const onMouseEnterPhuKien =()=>{
    //    setPhuKienDropdown(true)
    // }

    const onMouseLeavePhuKien = () => {
       setPhuKienDropdown(false)
      };


    const onMouseLeaveChinhsach = ()=>{
        setChinhSachDropdown(false)
    }
      
    //   controling hamburger menu
      const [show,setShow] = useState(true)
      const controlHamburger=()=>{
          if(window.scrollY > 500){
              setShow(false)
          }else{
              setShow(true)
          }
      }

      useEffect(()=>{
          window.addEventListener('scroll',controlHamburger)

          return ()=>{
            window.addEventListener('scroll',controlHamburger)
          }
      })

    

    return (
    <div className="header">
         <div className="promo">
            <span className="span1"></span>
            <span className="span2">Hotline: 02.345.323.67</span>
            <span className="phone"></span>
        </div>
        <nav className="navbar">
            <Link to="/" className="navbar-logo" data-aos="zoom-in-down">
                <img src={logo}/>
            </Link>
            <div className={show? 'menu-icon' : 'menu-icon active'} onClick={handleClick}>
                <i className={ click? "fas fa-times" :  "fas fa-bars"}/>
            </div>

            <ul className={click ?'nav-menu active' : "nav-menu"}>
                <li className="nav-item" >
                    <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
                        TRANG CHỦ
                    </Link>
                </li>

                <li className="nav-item"  onClick={toggleSubmenuAo} onMouseLeave={onMouseLeaveAo}>
                    <Link  className="nav-links" >
                        ÁO  <i className="fas fa-angle-down"></i> <i class="fas fa-angle-right"></i>
                    </Link>
                  { AoDropdown && <AoSubpages closeMoblieMenu={closeMoblieMenu} />}
                </li>

                <li className="nav-item" >
                    <Link to="/quan" className="nav-links" onClick={closeMoblieMenu}>
                        QUẦN SHORT
                    </Link>
                </li>

                <li className="nav-item" onClick={toggleSubmenuPhukien} onMouseLeave={onMouseLeavePhuKien}>
                    <Link  className="nav-links"  >
                        PHỤ KIỆN  <i className="fas fa-angle-down"></i> <i class="fas fa-angle-right"></i>
                    </Link>
                    {PhuKienDropdown && <PhuKienSubpages closeMoblieMenu={closeMoblieMenu}/>}
                </li>

                <li className="nav-item" >
                    <Link to="/new-collection" className="nav-links" onClick={closeMoblieMenu}>
                        HÀNG MỚI VỀ
                    </Link>
                </li>

                <li className="nav-item" onClick={toggleSubmenuChinhsach} onMouseLeave={onMouseLeaveChinhsach}>
                    <Link  className="nav-links" >
                        CHÍNH SÁCH  <i className="fas fa-angle-down"></i> <i class="fas fa-angle-right"></i>
                    </Link>
                    {ChinhSachDropdown && <ChinhSachSubpages closeMoblieMenu={closeMoblieMenu}/>}
                </li>
            </ul>

            <ul className="right-section">
                <li data-aos="fade-up">
                    <Link to="/dang-nhap" >
                        <span className="sign-in" title="Đăng nhập">
                        <i className="far fa-user"></i>
                        </span>
                    </Link>
                </li>
                
                <li data-aos="fade-down">
                    <Link to="/cart">
                    <span className="shopping-cart" title="Giỏ hàng"><i className="fas fa-shopping-cart"></i> 
                        <span className="number-item">{quantity}</span>
                    </span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
   
    )

};

export default Navbar;