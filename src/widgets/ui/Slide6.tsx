// ui/slide3.tsx
import React from 'react';
import slide6 from "../../svg/slide6.svg";
import "../slider.css"

const Slide6: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide6} alt="Slide 6" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide6;