
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Card from '../components/Card'

export async function getStaticProps() {

  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => { item.id = index + 1; item.key = item.name; } );

  return {
    props: { pokemons : data.results},
  }


}


export default function Home({pokemons}) {
  return (
    <>
      
      <div>
        <div className={styles.tituloContainer}>
          <h1>Poke<span>Next</span> </h1>
          <img src="/img/pokebola.png" alt="pokebola" />
        </div>

        <div className={styles.pokemonContainer}>
          {pokemons.map((pokemon) => (<Card key={pokemon.id} pokemon={pokemon}/>))}
        

        </div>
        
      </div>
    </>
  );
}
