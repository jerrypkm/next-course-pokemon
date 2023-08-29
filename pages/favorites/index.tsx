import React, { useState, useEffect } from 'react'
import { getFavoritesPokemons } from '@/utils'
import { MainLayout } from '@/components/layouts'
import Image from 'next/image'
import { Card } from '@nextui-org/react'
import FavoritePokemons from '@/components/ui/FavoritePokemons'
import NoFavorites from '@/components/ui/NoFavorites'

const FavoritesPage = () => {

    const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemon(getFavoritesPokemons());
    }, [])

    return <MainLayout title={"Favoritos"} description='Pagina de favoritos'>

        {favoritePokemon.length === 0 ? <NoFavorites></NoFavorites>
            : <FavoritePokemons pokemons={favoritePokemon}></FavoritePokemons>
        }


    </MainLayout>
}

export default FavoritesPage