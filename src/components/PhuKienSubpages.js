import React, { useState,useRef } from 'react';
import './Dropdown.css';
import {PhuKien} from './DropdownItems'
import {Link} from 'react-router-dom'




function PhuKienSubpages({closeMoblieMenu}){
    const [click1,setClick1] = useState(false);

   
    return(
        <>
            <ul  className={click1?'dropdown-menu clicked' : 'dropdown-menu'} >
                {PhuKien.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.path} className={item.cName} onClick={()=>setClick1(true)} onClick={closeMoblieMenu}  >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}


export default PhuKienSubpages