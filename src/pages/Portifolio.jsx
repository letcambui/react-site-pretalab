import { Header } from '../components/Header' 
import imgPortifolio from '../assets/imgPortifolio.svg'
import { Github } from './Github'

export function Portifolio() {
    return (
        <>
        <Header text="Meus projetos" image={imgPortifolio} />
        <Github />
        </>
    )
}