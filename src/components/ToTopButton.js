import React,{useEffect,useState} from 'react';
import './ToTopButton.css';
import {useWindowScroll} from 'react-use'


const ToTopButton = ()=>{

    const {y:pageYOffset} = useWindowScroll();
    const [visible,setVisible] = useState(false);

    useEffect(() => {
      if(pageYOffset > 400){
          setVisible(true)
      }else{
          setVisible(false)
      }
    }, [pageYOffset])


    const scrollToTop = ()=> window.scrollTo({top:0,behavior:'smooth'})

    if(!visible){
        return false
    }

    return (
        <div className="scroll-to-top " onClick={scrollToTop}>
            <i class=" icon fas fa-angle-up"></i>
            <span>TOP</span>
        </div>
    )
}

export default ToTopButton