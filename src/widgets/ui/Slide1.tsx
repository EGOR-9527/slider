// ui/slide1.tsx
import React from 'react';
import slide1 from "../../svg/slide1.svg";
import "../slider.css"


const Slide1: React.FC = () => {

    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide1} alt="Slide 1" style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </div>
    );
};

export default Slide1;