// ui/slide3.tsx
import React from 'react';
import slide7 from "../../svg/slide7.svg";
import "../slider.css"

const Slide7: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide7} alt="Slide 7" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide7;