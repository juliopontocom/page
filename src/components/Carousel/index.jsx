import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import fabric from '../../assets/fabric.png'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '../../assets/fabric.png',
    '../../assets/fabric.png',
    '../../assets/fabric.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // Muda de slide a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (


        <div className={styles.container}>
            <div className={styles.carousel}>
            <div className={styles.carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                <div className={styles.carouselItem} key={index}>
                    <img src={fabric} alt={`Slide ${index}`} />
                </div>
                ))}
            </div>
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.carouselButton} ${styles.prev}`} onClick={prevSlide}>
                    <BsArrowLeftSquareFill size={48} color="#6E5245" />
                </button>
                <button className={`${styles.carouselButton} ${styles.next}`} onClick={nextSlide}>
                    <BsArrowRightSquareFill size={48} color="#6E5245" />
                </button>
                
            </div>
        </div>
    
  );
};

export default Carousel;
