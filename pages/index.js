import Head from 'next/head'
import Center from '../components/Center'
import Siderbar from '../components/Siderbar'

export default function Home() {
  return (
    <>
    
       <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-black h-screen overflow-hidden ">
        <main className='flex'>
          <Siderbar />
          <Center />
        </main>
        <div>
          {/* Player */}
        </div>
     </div>

    </>

  )
}
