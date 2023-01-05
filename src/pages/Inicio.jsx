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
                <h2 className={styles.cardTitle}>Vida</h2>
                <p className={styles.cardText}>Aqui você terá a oportunidade de me conhecer melhor. Falo um pouco sobre a minha trajetória e gostos pessoais.</p>
            </div>
            <div className={styles.cardContainer}>
                <BracketsCurly size={150} color="#6bb0c9" weight="thin"/>
                <h2 className={styles.cardTitle}>Código</h2>
                <p className={styles.cardText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
      </div>
      <div className={styles.cardContainer}>
            <AddressBook size={150} color="#6bb0c9" weight="thin"/>
            <h2 className={styles.cardTitle}>Contato</h2>
            <p className={styles.cardText}>Esse espacinho foi criado para você me contatar. Seja para emprego, conversar sobre programação ou qualquer outra coisa relacionada.</p>
         </div>
        </div>
        </>
    )
}