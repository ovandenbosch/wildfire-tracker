import Head from 'next/head'
import Image from 'next/image'
import Map from '../components/Map'
import Header from '../components/Header'

export default function Home({events}) {
  return (
    <div>
      <Head>
        <title>Wildfire tracker</title>
        <meta name="description" content="Wildfire tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div>
      <Header />
      <Map eventData={events}/>
    </div>
      
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
  const { events } = await res.json()

  return {
    props: {
      events
    },

    revalidate: 60,
  }
}