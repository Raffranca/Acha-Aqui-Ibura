import React from 'react';
import './style.css';
import Img from '../../assets/5.png';

const Banner = ()=>{
    return(
        <div className="main">
            
            <img src={Img} alt='Logo pagina'/>
        </div>
    )
}

export default Banner;