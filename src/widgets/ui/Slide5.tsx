// ui/slide3.tsx
import React from 'react';
import slide5 from "../../svg/slide5.svg";
import "../slider.css"

const Slide5: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide5} alt="Slide 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="text5">
                <h1>Игра против Бота</h1>
                <h1>Идентичные правила, как в PvP.</h1>
                <h1>200% от ставки победителя</h1>
            </div>
        </div>
    );
};

export default Slide5;