// ui/slide3.tsx
import React from 'react';
import slide7 from "../../svg/slide7.svg";
import "../slider.css"

import Animait from "../../animation/AnimationSlid7.json";
import { Player } from '@lottiefiles/react-lottie-player';

const Slide7: React.FC = () => {
    return (
        <div className='item' style={{ minWidth: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={slide7} alt="Slide 7" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />

            <Player
                className='animation-player'
                autoplay={true}
                loop={true}
                controls={true}
                src={Animait} // Используйте импортированную анимацию
                style={{ height: '71vw', width: '71vw' , marginTop: "-50vw", marginLeft:"-87vw", position: 'absolute'}}
            />
        </div>
    );
};

export default Slide7;