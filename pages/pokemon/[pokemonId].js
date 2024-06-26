

import styles from '../../styles/Pokemon.module.css'
import { useRouter } from 'next/router'
export const getStaticPaths = async () => {
    
    
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params:{pokemonId:(index+1).toString()}
        }

    })


    return {
        paths,fallback:true,
    }

}


export const getStaticProps = async (context) => {
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();
    
    return {

        props: { pokemon: data },
    }
}





export default function PokemonId({ pokemon }) {
    const router = useRouter();

    if (router.isFallback) {
        return <><div>Carregando...</div></>
    }

    return (<>
    
        
        <div className={styles.pokemonContainer}>
        
                <h1 className={styles.title}>{pokemon.name }</h1>
        
            <div >
                <h3>Numero:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <h3>Tipo:</h3>
            <div className={styles.typesContainer}>
                
                {pokemon.types.map((item) => (<span className={`${styles.type} ${styles['type_'+item.type.name]}`}>{item.type.name}</span>))}
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.dataHeight}>
                    <h4>Altura:</h4>
                    <p>{ pokemon.height *10} cm</p>
                </div>
                <div className={styles.dataWeight}>
                    <h4>Peso:</h4>
                    <p>{ pokemon.weight/10} kg</p>
                </div>
            </div>

        </div>
    
    
    </>)
}