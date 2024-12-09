// ui/slide3.tsx
import React from 'react';
import slide8 from "../../svg/slide8.svg";
import "../slider.css"

const Slide8: React.FC = () => {
    return (
        <div className='item8' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide8} alt="Slide 8" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide8;