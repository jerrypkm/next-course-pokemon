import { Card } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface FavoriteCardPokemonProps {
    pokemonId: number
}

const FavoriteCardPokemon = ({pokemonId}: FavoriteCardPokemonProps) => {

    const router = useRouter()
    const onFavoriteClick = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
    <Card key={pokemonId} isHoverable style={{padding: "10px", display: "flex", justifyContent: "center"}}>
        <Image onClick={onFavoriteClick} style={{aspectRatio: "1/1", alignSelf: "center"}} alt='poke' width={200} height={140} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}></Image>
    </Card>
    )
}

export default FavoriteCardPokemon