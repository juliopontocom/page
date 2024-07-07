// src/components/Pagina/index.jsx
import React from 'react';
import styles from './styles.module.css';
import Secao1 from '../Secao1';
import Secao2 from '../Secao2';
import Secao3 from '../Secao3';
import Secao4 from '../Secao4';

const Pagina = () => {
  return (
    <div className={styles.container}>
      <Secao1 className={styles.slide} />
      <Secao2 className={styles.slide} />
      <Secao3 className={styles.slide} />
      <Secao4 className={styles.slide} />
    </div>
  );
};

export default Pagina;
