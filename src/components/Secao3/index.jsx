// src/components/Secao3/index.jsx
import React from 'react';
import styles from './styles.module.css';
import Carousel from '../Carousel';

const Secao3 = () => {
  return (
    <section id='secao3' className={styles.secao3}>
      <div className={styles.titulo}>

        <h1 className={styles.h1}>Portifólio</h1>
      </div>
      <Carousel></Carousel>
    </section>
  );
};

export default Secao3;
