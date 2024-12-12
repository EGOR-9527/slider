import React, { useState, useEffect } from 'react';
import { PAGES } from '../entities/PAGES';
import "./slider.css";

import Loader from "../shared/Loader";

export const Slider: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    const [isAnimating, setIsAnimating] = useState(false); // Состояние для отслеживания анимации

    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth);
            setOffset(-(window.innerWidth * currentIndex));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);

    const handleLeftArrowClick = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            setOffset(-(pageWidth * newIndex));
        }
    };

    const handleRightArrowClick = () => {
        if (currentIndex < PAGES.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setOffset(-(pageWidth * newIndex));
        }
    };

    useEffect(() => {
        if (currentIndex === 0) {
            // Если на первом слайде, запускаем анимацию
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setIsAnimating(false); // Завершаем анимацию
                handleRightArrowClick(); // Перелистываем слайд
            }, 4400); // Длительность анимации

            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <div className='main-container'>
            <div className="indicators">
                {currentIndex === 0 ? null : PAGES.slice(0, 7).map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentIndex === index + 1 ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="window">
                <div className="all-pages-container" style={{ transform: `translateX(${offset}px)` }}>
                    {PAGES}
                </div>
            </div>
            <div className="container-button">
                {currentIndex === 0 && null} {/* На первой странице нет кнопок */}
                {currentIndex === 1 && (
                    <button style={{marginInlineStart: "0"}} className="enter-button" onClick={handleRightArrowClick}>Далее</button>
                )}
                {currentIndex > 1 && (
                    <>
                        {currentIndex > 0 && (
                            <button className="exit-button" onClick={handleLeftArrowClick}>Назад</button>
                        )}
                        {currentIndex < PAGES.length && (
                            <button className="enter-button" onClick={handleRightArrowClick}>Далее</button>
                        )}
                    </>
                )}
            </div>
            {isAnimating && <Loader />} {/* Показываем лоадер, если анимация активна */}
        </div>
    );
};