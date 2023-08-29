import React from 'react'
import styles from './favorites.module.css';
import FavoriteCardPokemon from './FavoriteCardPokemon';

interface FavoritePokemonsProps{
    pokemons: number[];
}
const FavoritePokemons = ({
    pokemons
}: FavoritePokemonsProps) => {
  return (
    <ul className={styles["poke-container"]}>  
        {pokemons.map(id => <FavoriteCardPokemon key={id} pokemonId={id}></FavoriteCardPokemon>)}
    </ul>
  )
}

export default FavoritePokemons