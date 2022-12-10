import { useState } from 'react'
import { Header } from '../components/Header' 
import imgContato from '../assets/imgContato.svg'
import styles from '../styles/pages/contato.module.css'

export function Contato() {
    const [nome, setNome ] = useState ('')
    const [email, setEmail] = useState ('')
    const [mensagem, setMensagem] = useState ('')

    function handleInputName(event) {
        setNome(event.target.value)
    }

    function handleInputEmail(event) {
        setEmail (event.target.value)
    }
    function handleInputMessage(event) {
        setMensagem (event.target.value)
    }

    function createMessage(event) {
        event.preventDefault()
        console.log('nome', nome)
        console.log('email', email)
        console.log('mensagem', mensagem)

        setNome ('')
        setEmail('')
        setMensagem('')

    }
    return (
        <>
        <Header text="contato" image={imgContato} />
        <div className={styles.formContainer}>
            <form onSubmit={createMessage} className={styles.form}>
                <input onChange={handleInputName} placeholder='Digite seu nome' className={styles.formInput} value={nome} type="text" />
                <input onChange={handleInputEmail} placeholder='Digite seu e-mail' className={styles.formInput} value={email} type="text" />
                <textarea onChange={handleInputMessage} placeholder='Digite sua mensagem' className={styles.formTextArea} value={mensagem} />
                <button className={styles.formButton} type='submit'>Enviar mensagem</button>
            </form>
        </div>
        </>
    )
}