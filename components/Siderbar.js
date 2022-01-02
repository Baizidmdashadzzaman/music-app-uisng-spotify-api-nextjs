import { 
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
    PlayIcon,
    SwitchHorizontalIcon,
    CogIcon
 } from '@heroicons/react/outline'
import {signOut, useSession} from "next-auth/react"

function Siderbar() {
    const {data:session , status} = useSession();
    //console.log(session);
    return (
        <div className=' text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide border-gray-900 '>
            <div className=' space-y-4 ' >
                <button onClick={() => signOut()} className='flex space-x-2 hover:text-white' >
                   <CogIcon className='h-5 w-5' />
                   <p>Logout</p>
                </button>
                <hr className=' border-t-[0.1px] border-gray-900 ' />
                <button className='flex space-x-2 hover:text-white' >
                   <HomeIcon className='h-5 w-5' />
                   <p>Home</p>
                </button>
                <button className='flex space-x-2 hover:text-white' >
                   <SearchIcon className='h-5 w-5' />
                   <p>Search</p>
                </button>
                <button className='flex space-x-2 hover:text-white' >
                   <LibraryIcon className='h-5 w-5' />
                   <p>Your Library</p>
                </button>

                <hr className=' border-t-[0.1px] border-gray-900 ' />

                <button className='flex space-x-2 hover:text-white' >
                   <PlusCircleIcon className='h-5 w-5' />
                   <p>Craete Playlist</p>
                </button>
                <button className='flex space-x-2 hover:text-white' >
                   <HeartIcon className='h-5 w-5' />
                   <p>Liked Songs</p>
                </button>
                <button className='flex space-x-2 hover:text-white' >
                   <RssIcon className='h-5 w-5' />
                   <p>Your Episodes</p>
                </button>

                <hr className=' border-t-[0.1px] border-gray-900 ' />
                
                {/* Playlist */}
                <button className='flex space-x-2 hover:text-white cursor-pointer' >
                    <PlayIcon className='h-5 w-5' />
                    <p>Playlist Name</p> 
                </button>
                <button className='flex space-x-2 hover:text-white cursor-pointer' >
                    <PlayIcon className='h-5 w-5' />
                    <p>Playlist Name</p> 
                </button>
                <button className='flex space-x-2 hover:text-white cursor-pointer' >
                    <PlayIcon className='h-5 w-5' />
                    <p>Playlist Name</p> 
                </button>
                
                

            </div>
        </div>
    )
}

export default Siderbar
