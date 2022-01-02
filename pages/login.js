import Head from 'next/head'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';
import logo from '../Images/logo.png'

function Login({providers}) {
  return (
    <div className="text-center h-screen w-screen flex flex-col items-center justify-center relative bg-black " >
    
       <Head>
        <title>Spotify : Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={logo} width={385} height={115} className='w-52 mb-5 ' />
      <br/>
      <br/>
      {Object.values(providers).map((provider) => (
          <div key={provider.name} >
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })} 
            className=' bg-[#18d860] text-white p-5 rounded-full font-bold ' >
              Login with {provider.name}
            </button>
          </div>
        ))}
      

    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}