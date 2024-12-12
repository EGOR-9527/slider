// ui/slide3.tsx
import React from 'react';
import slide6 from "../../svg/slide6.svg";
import "../slider.css"

const Slide6: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide6} alt="Slide 6" style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }} />

            <div className="text6">
                <h1>Бонус за Парный Разряд</h1>
                <h1>Выпавший дубль дает +1 к сумме <br></br>очков.</h1>

                <h1>Например, 3-3 = 8 очков (6 за <br></br> кубики + 2 бонусных).</h1>
            </div>
        </div>
    );
};

export default Slide6;