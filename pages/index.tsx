import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { MainLayout } from '@/components/layouts'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { pokeApi } from '@/api'
import styles from './homePage.module.css'
import Pokemon from '@/components/ui/Pokemon'

export default function HomePage({pokemons}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <MainLayout description='Pokemn app by names' title='Pokemon App'>
      <div className='home-page'>
        <ul className={styles["poke-container"]}>  
          {pokemons.map(el => <Pokemon 
              id={el.id} 
              key={el.id} 
              name={el.name} 
              image={el.image}
            />
          )}
        </ul>
        <div><ThemeSwitcher/></div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<{
  pokemons: SmallPokemon[]
}> = async () => {

  const { data } = await pokeApi.get<PokemonListResponse>("pokemon?limit=151")
  const pokemons: SmallPokemon[] = data.results.map((poke, ind) => {
    return {
      ...poke,
      id: ind+1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ind+1}.svg`
    }
  })

  return { props: { pokemons } }
}