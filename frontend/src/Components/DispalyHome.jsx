import React from 'react'
import Navbar from './Navbar'
//import { albumsData,songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { useContext } from 'react';
import {PlayerContext} from '../Context/PlayerContext.jsx'


const DispalyHome = () => {

  const {songsData,albumsData}=useContext(PlayerContext);
  return (
    
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto '>
          {albumsData.map((item,index)=>(<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id}/>))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto '>
          {songsData.map((item,index)=>(<SongItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id}/>))}
        </div>
      </div>
    </>
      
    
  )
}

export default DispalyHome
