import Head from "next/head"
import { PageProps } from '@/interfaces/global.interface'
import Navbar from '../ui/Navbar'

const origin = (typeof window === "undefined") ? "" : window.location.origin

export const MainLayout = ({children, title, description="info pokemon", keyWords = "pokemon, pokedex"}: PageProps) => {

  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keyWords}></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/images/banner.png`} />      
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main style={{padding: "1em"}}>
            {children}
        </main>
    </div>
  )
}
