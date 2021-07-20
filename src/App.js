import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import TrangChu from './Pages/TrangChu'
import AoPolo from './Pages/SubPages/AoPolo'
import AoSoMi from './Pages/SubPages/AoSoMi'
import SaleOff from './Pages/SaleOff'
import FAQS from './Pages/FAQS'

import AoCotton from './Pages/SubPages/AoCotton'
import ChinhSach from './Pages/ChinhSach'
import HangMoiVe from './Pages/HangMoiVe';
import PhuKien from './Pages/PhuKien'
import Quan from './Pages/Quan'
import KhauTrang from './Pages/SubPages/KhauTrang';
import Tat from './Pages/SubPages/Tat';
import Mu from './Pages/SubPages/Mu'
import Cart from './Pages/Cart';
import DangNhap from './Pages/DangNhap'


import {ProductProvider} from './global/ProductsContext'
import {CartProvider} from './global/CartContext';
import ScrollToTop from './components/ScrollToTop';

import Loading from './components/Loading'
import ToTopButton from './components/ToTopButton'
import PopUp from './components/PopUp'

function App() {

  const [isOpen,setIsOpen] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setIsOpen(!isOpen)
    },10000)
   
  },[])

  

  const [isLoading,setIsLoading] = useState(true)
  
  useEffect(() => {
      setTimeout(()=>{
          setIsLoading(!isLoading)
      },3000);
      
  },[])

  if(isLoading){
      return <Loading/>
  } 

  return (
    <ProductProvider>
      <CartProvider>
   <Router>

     {isOpen? <PopUp closeModal={()=>setIsOpen(false)}/> : ''}
   
     <ScrollToTop/>
     <Navbar/>
     <Switch>
        <Route path="/" exact component={TrangChu}/>
        <Route path="/ao" component={TrangChu}/>
          <Route path="/ao-so-mi" component={AoSoMi}/>
          <Route path="/ao-polo" component={AoPolo}/>
          <Route path="/ao-cotton" component={AoCotton}/>
         
        <Route path="/quan" component={Quan}/>

        <Route path="/phu-kien" component={PhuKien}/>
          <Route path="/tat" component={Tat}/>
          <Route path="/khau-trang" component={KhauTrang}/>
          <Route path="/mu" component={Mu}/>

        <Route path="/new-collection" component={HangMoiVe}/>
        <Route path="/chinh-sach" component={ChinhSach}/>
        <Route path="/SaleOff" component={SaleOff}/>
        <Route path="/hoi-dap" component={FAQS}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/dang-nhap" component={DangNhap}/>
     </Switch>
        <ToTopButton/>
   </Router>
   </CartProvider>
   </ProductProvider>
  );
}

export default App;
