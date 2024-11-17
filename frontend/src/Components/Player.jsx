import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {

  const {track,seekBar,seekBg,playStatus,play,pause,time,previous,nextsong,seeksong}=useContext(PlayerContext);


  return (
    <div className='h-[10%] w-full bg-black justify-evenly text-white px-4'>
      <div className='hidden lg:flex align content-around items-center gap-5'>
        <img className='w-12' src={track.image} alt=''></img>
        {/* song that is palying */}
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
        {/* PLay pause and other icons */}
        <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shffle-icon"></img>
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="shffle-icon"></img>
          {playStatus
          ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="shffle-icon"></img>
          :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="shffle-icon"></img>
          }

          
          <img onClick={nextsong} className='w-4 cursor-pointer' src={assets.next_icon} alt="shffle-icon"></img>
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="shffle-icon"></img>
         </div>
         {/* Music Bar */}
         <div className='flex items-center gap-5'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seeksong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
              <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'></hr>
           </div>
           <p>{time.totalTime.minute}:{time.totalTime.second}</p>
          </div>
        </div>
        {/* Additional Icons */}
        <div className='flex items-center gap-2 opacity-75'>
              <img className='w-4' src={assets.plays_icon} alt='icon'></img>
              <img className='w-4' src={assets.mic_icon} alt='icon'></img>
              <img className='w-4' src={assets.queue_icon} alt='icon'></img>
              <img className='w-4' src={assets.speaker_icon} alt='icon'></img>
              <img className='w-4' src={assets.volume_icon} alt='icon'></img>
              <div className='w-20 bg-slate-50 h-1 rounded'></div>
              <img className='w-4' src={assets.mini_player_icon} alt='icon'></img>
              <img className='w-4' src={assets.zoom_icon} alt='icon'></img>

        </div>

      </div>
    </div>
  )
}

export default Player
