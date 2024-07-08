// src/components/Secao1/index.jsx
import React from 'react';
import styles from './styles.module.css';
import Header from '../Header'
import Corpo1 from '../Corpo1'

const Secao1 = () => {
  return (
    <section id='secao1' className={styles.secao1}>
      <Header></Header>
      <Corpo1></Corpo1>
    </section>
  );
};

export default Secao1;
