import styles from '../styles/components/footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>Feito com afeto, por <a href="https://www.linkedin.com/in/leticia-cambui-m/" target="_blank">Letícia Cambui Monteiro</a></p>
        </footer>
    )
}