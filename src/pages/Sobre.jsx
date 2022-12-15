import { Header } from '../components/Header'
import imgSobre from '../assets/imgSobre.svg'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return (
        <>
    <Header text="Quem sou eu?" image={imgSobre} />
    <div className={styles.sobreContainer}>
        <div className={styles.sobreTexto}>
        <h2 className={styles.sobreTitulo}>Olá, sou Letícia Cambui.</h2>
        <p className={styles.sobreParagrafo}>Nascida e criada no litoral de São Paulo, obcecada por prancha, praia e pedal. Sou formada em Ciências Contábeis e trabalho como assistente contábil. Passei a me interessar pela área de programação quando entendi o que era a tecnologia e como ela estava para o mundo, iniciei uma transição de carreira quando percebi que a única coisa que me mantinha acordada sem eu perceber que estava com sono, eram as linhas de código. Estou desenvolvendo habilidades através de cursos onlines, voltados ao front-end e curso pós graduação (MBA) em Análise e Desenvolvimento de Programas. </p>
        </div>
    </div>
    </>


    )
    
}