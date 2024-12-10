// ui/slide3.tsx
import React from 'react';
import slide3 from "../../svg/slide3.svg";
import "../slider.css"

import Animait from "../../animation/AnimationSlid3.json";
import { Player } from '@lottiefiles/react-lottie-player';

const Slide3: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide3} alt="Slide 3" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />

            <Player
                className='animation-player'
                autoplay={true}
                loop={true}
                controls={true}
                src={Animait} // Используйте импортированную анимацию
                style={{ height: '68vw', width: '68vw' , marginTop: "-30vw", marginLeft:"-87vw", position: 'absolute'}}
            />
        </div>
    );
};

export default Slide3;