// ui/slide3.tsx
import React from 'react';
import slide5 from "../../svg/slide5.svg";
import "../slider.css"

const Slide5: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide5} alt="Slide 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="text5">
                <p>Игра против Бота</p>
                <p>Идентичные правила, как в PvP.</p>
                <p>200% от ставки победителя</p>
            </div>
        </div>
    );
};

export default Slide5;