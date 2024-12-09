// ui/slide3.tsx
import React from 'react';
import slide4 from "../../svg/slide4.svg";
import "../slider.css"

const Slide4: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide4} alt="Slide 4" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide4