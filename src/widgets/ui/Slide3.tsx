// ui/slide3.tsx
import React from 'react';
import slide3 from "../../svg/slide3.svg";
import "../slider.css"

import Animait from "../../animation/AnimationSlid3.json";
import { Player } from '@lottiefiles/react-lottie-player';

const Slide3: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide3} alt="Slide 3" style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }} />

            <Player
                className='animation-player'
                autoplay={true}
                loop={true}
                controls={true}
                src={Animait} // Используйте импортированную анимацию
                style={{ height: '68vw', width: '68vw', marginTop: "-42.51337vw", marginLeft: "-87vw", position: 'absolute' }}
            />

            <div className="text3">
                <h1>Удобная платежная система</h1>
                <h1>с депозитом и выводом </h1>
                <h1>в ton, m5 и dfc</h1>
            </div>
        </div>
    );
};

export default Slide3;