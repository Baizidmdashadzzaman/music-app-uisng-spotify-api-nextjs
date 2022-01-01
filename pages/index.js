import Head from 'next/head'
import Siderbar from '../components/Siderbar'

export default function Home() {
  return (
    <>
    
       <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-black h-screen overflow-hidden ">
        <main>
          <Siderbar />
          {/* Main content */}
        </main>
        <div>
          {/* Player */}
        </div>
     </div>

    </>

  )
}
