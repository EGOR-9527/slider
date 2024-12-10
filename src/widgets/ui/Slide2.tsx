// ui/slide2.tsx
import React from 'react';
import slide2 from "../../svg/slide2.svg";
import "../slider.css"
import Animait from "../../animation/AnimationSlid2.json";
import { Player } from '@lottiefiles/react-lottie-player';

const Slide2: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide2} alt="Slide 2" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />

            <Player
                className='animation-player'
                autoplay={true}
                loop={true}
                controls={true}
                src={Animait} // Используйте импортированную анимацию
                style={{ height: '80vw', width: '80vw' , marginTop: "-52vw", marginLeft:"-90vw", position: 'absolute'}}
            />
        </div>
    );
};

export default Slide2;