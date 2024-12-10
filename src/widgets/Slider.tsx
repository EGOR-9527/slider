import React, { useState, useEffect } from 'react';
import {PAGES} from '../entities/PAGES';
import "./slider.css";
import Loader from '../shared/Loader'; // Импортируйте ваш лоадер

export const Slider: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0); // Состояние для текущего индекса
    const [pageWidth, setPageWidth] = useState(window.innerWidth); // Устанавливаем ширину страницы в зависимости от ширины окна

    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth); // Обновляем ширину страницы при изменении размера окна
            setOffset(-(window.innerWidth * currentIndex)); // Обновляем смещение при изменении размера
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);

    const handleLeftArrowClick = () => {
        if (currentIndex > 0) { // Проверяем, что индекс больше 0
            const newIndex = currentIndex - 1; // Уменьшаем индекс
            setCurrentIndex(newIndex);
            setOffset(-(pageWidth * newIndex)); // Обновляем смещение
        }
    };

    const handleRightArrowClick = () => {
        if (currentIndex < PAGES.length - 1) { // Проверяем, что индекс меньше длины массива - 1
            const newIndex = currentIndex + 1; // Увеличиваем индекс
            setCurrentIndex(newIndex);
            setOffset(-(pageWidth * newIndex)); // Обновляем смещение
        }
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Замените 3000 на время, необходимое для загрузки данных

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />; // Показать лоадер, пока данные загружаются
    }

    return (
        <div className='main-container'>
            <div className="indicators">
                {PAGES.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="window">
                <div className="all-pages-container" style={{ transform: `translateX(${offset}px)` }}>
                    {PAGES}
                </div>
            </div>
            <div className="container-button">
                <button className="exit-button" onClick={handleLeftArrowClick}>Назад</button>
                <button className="enter-button" onClick={handleRightArrowClick}>Далее</button>
            </div>
        </div>
    );
};