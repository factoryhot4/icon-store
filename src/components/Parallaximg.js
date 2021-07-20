import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax';

const Parallaximg=(props) =>{

    let contentStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.1)',
        
    }


    return(
        <ParallaxBanner 
            layers={[{image:props.imgsrc, amount:0.6}]}
            style={{height:props.height}}
        >
            <div style={contentStyle}>
                {props.children}
            </div>
        </ParallaxBanner>
    )
}

export default Parallaximg;