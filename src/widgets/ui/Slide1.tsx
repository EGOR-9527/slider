// ui/slide1.tsx
import React from 'react';
import slide1 from "../../svg/slide1.svg";

const Slide1: React.FC = () => {

    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide1} alt="Slide 1" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
    );
};

export default Slide1;