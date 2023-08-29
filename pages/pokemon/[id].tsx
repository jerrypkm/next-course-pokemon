import { useEffect, useState } from 'react'

import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react'

import confeti from 'canvas-confetti'

import { Pokemon } from '@/interfaces'
import { MainLayout } from '@/components/layouts'
import { existInFavorites, getPokemonInfo, toggleFavorite } from '@/utils'


interface Props {
  pokemon: Pokemon, //previamente renderizado
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isFavorite, setIsFavorite] = useState( existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    console.log(`ID - ${pokemon.id}`)
    toggleFavorite(pokemon.id)
    setIsFavorite(!isFavorite)

    if(!isFavorite){
      confeti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  useEffect(() => { 
    console.log(localStorage.getItem('favorites'))
  }, [])


  return (
    <MainLayout title={pokemon.name} description='pokemon'>
        <div className="mt-2">
          <div className='flex flex-row gap-4 flex-wrap justify-center w-12/12'>
            <Card className='w-11/12 sm:w-6/12 md:w-4/12 lg:w-3/12' isHoverable style={{padding: "30px"}}>
              <CardBody>
                <Image
                  width={300}
                  alt={pokemon.name}
                  style={{aspectRatio: "1/1", width: "100%"}}
                  height={200}
                  src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}/>
              </CardBody>
            </Card>
            <Card className='w-11/12 sm:w-5/12 md:w-7/12 lg:w-8/12' isHoverable style={{padding: "30px"}}>
              <CardHeader style={{display: "flex", justifyContent: "space-between"}}>
                  <h1 style={{fontSize: "35px", fontWeight: "bold", textTransform: "uppercase"}}>{pokemon.name}</h1>
                  <Button 
                    onClick={onToggleFavorite} 
                    color="primary" 
                    variant={isFavorite ? "ghost" : "solid"}
                  >{isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}</Button>
              </CardHeader>
              <CardBody>
                <p style={{fontSize: "30px"}}>Sprites:</p>
                <div className='flex'>
                  <Image 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                  <Image 
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                  <Image 
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                  <Image 
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) =>{

  const pokemon151 = [...Array(151)].map((val, ind) => `${ind+1}`)
  return{
    paths: pokemon151.map(id => ({
      params:{id}
    })),
    fallback: false //Genera 404 cuando no hay una pagina de las 151 generadas
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const { id } = params as {id: string}

  return {
    props:{
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage