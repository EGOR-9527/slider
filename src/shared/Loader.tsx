// ui/Loader.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '../animation/Loader.json'; // Укажите путь к вашему файлу Lottie
import Welcometo from '../animation/Welcometo.json'; // Укажите путь к вашему файлу Lottie

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: "absolute", top: "-15vw", overflow: 'hidden'}}>
            <Player
                autoplay
                loop
                src={loadingAnimation}
                style={{ height: "100vw", width: "100vw"}} // Укажите размеры лоадера
            />

            <Player
                autoplay
                loop
                src={Welcometo}
                style={{ height: "100vw", width: "100vw", position: "absolute", marginTop: "0px", left: "0"}} // Укажите размеры лоадера
            />
        </div>
    )
};

export default Loader;