// ui/Loader.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '../animation/Loader.json'; // Укажите путь к вашему файлу Lottie

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: "absolute" }}>
            <Player
                autoplay
                loop
                src={loadingAnimation}
                style={{ height:"100vw", width: "100vw"}} // Укажите размеры лоадера
            />
        </div>
    )
};

export default Loader;