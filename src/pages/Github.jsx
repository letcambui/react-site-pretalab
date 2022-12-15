import { useEffect, useState } from "react"
import styles from '../styles/pages/github.module.css'

export function Github() {
    const [repositories, setRepositories] = useState([])

    
    
    useEffect(() => {
       fetch('https://api.github.com/users/letcambui/repos')
           .then(response => response.json())
           .then(data => setRepositories(data))
   }, [])
     
     return (
       <div className={styles.githubContainer}>
           <ul className={styles.githubList}>
               {repositories.filter(repo => repo.name.includes("portifolio")).map(repository => {
                   return (
                       <li className={styles.githubListItem}>
                         <h3 className={styles.githubName}>{repository.name}</h3> 
                         <a className={styles.githubLink} href ={repository.html_url} target="_blank">Saiba Mais</a> 
                       </li>
                   )
               })}
           </ul>
       </div>
    )


}