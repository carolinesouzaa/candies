import { useState } from 'react';
import styles from './Cardapio.module.scss';
import logo from '../../assets/logo.png';
import header from '../../assets/cardapio/header.png';
import Buscador from './Buscador/index';
import Filtros from './Filtros/index';

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
    return (
        <main>
            <nav className={styles.menu}>
              <img src= { logo } className={styles.menu__image} alt="logo" />
            </nav>
            <header className={styles.header}>
              <div className={styles.header__text}>
                Deixando a sua vida mais doce!
              </div>
              <img src= { header } className={styles.header__image} alt="header" />
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo}>Cardápio</h3>
              <Buscador busca={busca} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
              <Filtros filtro={filtro} setFiltro={setFiltro}/>
              </div>
            </section>
        </main>
    );
}
