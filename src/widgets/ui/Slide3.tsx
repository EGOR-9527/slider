// ui/slide3.tsx
import React from 'react';
import slide3 from "../../svg/slide3.svg";
import "../slider.css"

const Slide3: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide3} alt="Slide 3" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide3;