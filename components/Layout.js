
import Footer from './Footer'
import NavBar from './NavBar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>PokeNext</title>
                <link rel="shortcut icon" href="/img/pokebola.png" />
            </Head>
            <NavBar/>
            <main className="main-container">
                
                
                {children}

                




            </main>
            <Footer/>
        
        </>
    )
}