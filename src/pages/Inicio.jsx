import { Butterfly, BracketsCurly, AddressBook  } from 'phosphor-react'
import { Header } from '../components/Header' 
import imgInicio1 from '../assets/imgInicio1.svg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
    return (
        <>
        <Header text="Olá! Bem vindo(a)" image={imgInicio1} />
        <div className={styles.homeContainer}>
            <div className={styles.cardContainer}>
                <Butterfly size={150} color="#6bb0c9" weight="thin" />
                <h2 className={styles.cardTitle}>Lore impsum</h2>
                <p className={styles.cardText}>LOREM IMPSUMMMM LOREM IMPSUMMMM LOREM IMPSUMMMM LOREM IMPSUMMMM</p>
            </div>
            <div className={styles.cardContainer}>
                <BracketsCurly size={150} color="#6bb0c9" weight="thin"/>
                <h2 className={styles.cardTitle}>Código</h2>
                <p className={styles.cardText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
      </div>
      <div className={styles.cardContainer}>
            <AddressBook size={150} color="#6bb0c9" weight="thin"/>
            <h2 className={styles.cardTitle}>Contatinho</h2>
            <p className={styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
         </div>
        </div>
        </>
    )
}