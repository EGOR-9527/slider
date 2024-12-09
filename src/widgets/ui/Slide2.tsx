// ui/slide2.tsx
import React from 'react';
import slide2 from "../../svg/slide2.svg";
import "../slider.css"

const Slide2: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide2} alt="Slide 2" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide2;