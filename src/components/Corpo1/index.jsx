import React from 'react';
import styles from './styles.module.css';
import avatar from '../../assets/ava.png'

const Corpo1 = () => {
  return (
    <div className={styles.corpo1}>
        <div className={styles.corpoTexto}>
            <h1 className={styles.h1}>Olá, meu <br/>
            nome é Julio</h1>
            <p className={styles.p}>sou desenvolvedor full-stack</p>
            <button className={styles.button}>Ver mais</button>
        </div>
        <img className={styles.avatar} src={avatar} alt="" />
    </div>
  );
};

export default Corpo1;