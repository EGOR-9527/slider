// ui/slide3.tsx
import React from 'react';
import slide7 from "../../svg/slide7.svg";
import "../slider.css"

import Animait from "../../animation/AnimationSlid7.json";
import { Player } from '@lottiefiles/react-lottie-player';

const Slide7: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide7} alt="Slide 7" style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }} />

            <Player
                className='animation-player'
                autoplay={true}
                loop={true}
                controls={true}
                src={Animait} // Используйте импортированную анимацию
                style={{ height: '71vw', width: '71vw', marginTop: "-50vw", marginLeft: "-87vw", position: 'absolute' }}
            />

            <div className="text7">
                <h1>Сжигание</h1>
                <h1>уменьшение предложения монеты</h1>
                <h1>для повышения её ценности</h1>
                <h1>и дефицита.</h1>
            </div>
        </div>
    );
};

export default Slide7;