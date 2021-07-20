import React , {useRef,useState} from 'react'
import HeroSlider from '../components/HeroSlider'
import GalleryBanner from '../components/GalleryBanner'
import NewCollectionSlider from '../components/NewCollectionSlider'
import Review from '../components/Review'
import Policy from '../components/Policy'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Parallax from '../components/Parallax';
import {useEffect} from 'react';
import Loading from '../components/Loading'
import "./TrangChu.css";


function TrangChu(){

   

    
    return(    
        

            <div className="home-page-container">
                <HeroSlider/>
             <GalleryBanner/>
             <NewCollectionSlider/>
             <Review/>
             <Parallax/>
             <Policy/>
             <Contact/>
             <Footer/>
            </div>
      

        
    )
    
}

export default TrangChu

