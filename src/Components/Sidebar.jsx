import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className='w-[25%] text-white h-full p-2 flex-col gap-2 lg:flex'>
       {/* Home and Search */}
        <div className='h-[15%] border-y-8 border-black bg-[#121212] rounded flex flex-col justify around'>
            <div onClick={()=>navigate('/')} className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="home-icon"></img>
                <p className='font-bold'>Home</p>
             </div>
             <div className='flex item-center gap-3 pl-8  pt-6 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="home-icon"></img>
                <p className='font-bold'>Search</p>
             </div>
        </div>

        {/* Library section */}
        <div className=' text-white font-bold h-[85%] bg-[#121212] p-2  rounded  justify around'>
            <div className='flex item-center gap-3 pl-6 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img  className='w-8 h-8' src={assets.stack_icon} alt='library'>
                    </img>
                    <p >Your Library</p>
                </div>
                <div className='flex item-center gap-3 pl-6 pt-2 cursor-pointer'>
                    <img className='w-5  h-5 ' src={assets.arrow_icon}></img>
                    <img className='w-5 h-5' src={assets.plus_icon}></img>
                </div>
            </div>
            {/* Add your first playlist */}
             <div className='p-4 border-y-8 border-[#121212] bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4'>
                <h1>
                    Create your first playlist
                </h1>
                <p className='font-light'>It's easy we will help you</p>
                <button className='px-3 py-3 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
             </div>
             {/* Podcast to follow */}
             <div className='p-4 border-y-8 border-[#121212] bg-[#242424] m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4'>
                <h1>
                Let's find some podcast fro you to follow                </h1>
                <p className='font-light'>We will keep you updated about this </p>
                <button className='px-3 py-3 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>
             </div>


        </div>
       
    </div>
  )
}

export default Sidebar
