// src/components/Secao1/index.jsx
import React from 'react';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
        <a href="#secao2" className={styles.ancora} >Habilidades</a>
        <a href="#secao3" className={styles.ancora} >Portifólio</a>
        <a href="#secao4" className={styles.ancora} >Contato</a>
    </div>
  );
};

export default Header;
