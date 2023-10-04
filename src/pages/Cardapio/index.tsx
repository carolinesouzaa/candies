import { useState } from 'react';
import styles from './Cardapio.module.scss';
import logo from '../../assets/logo.png';
import header from '../../assets/cardapio/header.png';
import Buscador from './Buscador/index';
import Filtros from './Filtros/index';

export default function Cardapio() {
  const [busca, setBusca] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
              <img src= { logo } alt="logo" />
              <img src= { header } className={styles.headerImage} alt="header" />
            </nav>
            <header className={styles.header}>
              <div className={styles.header__text}>
                  Deixando sua vida mais doce!
              </div>
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo}>Cardápio</h3>
              <Buscador busca={busca} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
