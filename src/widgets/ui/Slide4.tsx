// ui/slide3.tsx
import React from 'react';
import slide4 from "../../svg/slide4.svg";
import "../slider.css"

const Slide4: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide4} alt="Slide 4" style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }} />

            <div className="text4">
                <div className="blockText4">
                    <h1>PvP Режим</h1>
                    <h1>(Игрок против Игрока)</h1>
                </div>

                <h1>Игроки бросают кости по очереди.</h1>

                <div className="blockText4">
                    <h1>Побеждает тот,кто наберет.</h1>
                    <h1>больше очков.</h1>
                </div>

                <div className="blockText4">
                    <h1>190% от ставки победителя,</h1>
                    <h1>10% ставки сжигается.</h1>
                </div>
            </div>
        </div>
    );
};

export default Slide4