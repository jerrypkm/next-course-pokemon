import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './pokemon.module.css'
import { Card } from '@nextui-org/react'

interface Props {
    image: string,
    id: number,
    name: string,
}

const Pokemon = ({image, id, name}: Props) => {
  const router = useRouter()

  const onClick = (name: string) => {
    router.push(`name/${name}`)
  }

  return (
    <li className={styles["poke-card"]}>
        <Card isHoverable style={{padding: "10px"}}>
          <Image onClick={() => onClick(name)} width={200} height={100} alt='poke' src={image}></Image>
          <p>#{id} - {name}</p>
        </Card>
    </li>
  )
}

export default Pokemon