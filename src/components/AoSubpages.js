import React, { useState,useRef } from 'react';
import './Dropdown.css';
import  {Ao} from './DropdownItems';

import {Link} from 'react-router-dom'


function AoSubpages({closeMoblieMenu}){
    const [click,setClick] = useState(false);

    
    return(
        <>
            <ul  className={click?'dropdown-menu clicked' : 'dropdown-menu'}   >
                {Ao.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.path} className={item.cName} onClick={()=>setClick(!click)} onClick={closeMoblieMenu}  >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}




export default AoSubpages