// ui/slide2.tsx
import React from 'react';
import slide2 from "../../svg/slide2.svg";
import Animait from "../../animation/AnimationSlid2.json";
import { Player } from '@lottiefiles/react-lottie-player';
import "../slider.css"
const Slide2: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide2} alt="Slide 2" style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }} />

            <Player
                className='animation-player'
                autoplay={true}
                loop={true}
                controls={true}
                src={Animait} // Используйте импортированную анимацию
                style={{ height: '67.91444vw', width: '67.91444vw', marginTop: "-31.03448vh", marginLeft: "-86vw", position: 'absolute' }}
            />

            <div className="text2">
                <h1>Кидай</h1>
                <h1>Набирай очки</h1>
                <h1>Побеждай</h1>
            </div>
        </div>
    );
};

export default Slide2;