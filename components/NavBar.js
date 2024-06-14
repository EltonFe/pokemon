import Link from 'next/link'
import styles from  '../styles/NavBar.module.css'

export default function NavBar() {
    
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <img src="/img/pokebola.png" alt="" width="50px" />
                    <h1>Logo</h1>
                </div>
                <ul className={styles.ul}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">Sobre</Link></li>
                </ul>
            </nav>
        
        </>
)


}