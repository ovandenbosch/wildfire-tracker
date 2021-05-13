import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wildfire tracker</title>
        <meta name="description" content="Wildfire tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div>
      <Map />
    </div>
      
    </div>
  )
}
