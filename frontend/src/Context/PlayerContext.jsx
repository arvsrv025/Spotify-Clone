import { createContext ,useEffect,useRef, useState} from "react";
//import { songsData } from "../assets/assets";
import axios from 'axios';
export const PlayerContext=createContext();

const PlayerContextProvider=(props)=>{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();

    const url='http://localhost:5000';

    const [songsData,setSongsData]=useState([]);
    const [albumsData,setAlbumsData]=useState([]);
    const [track,setTrack]=useState(songsData[2]);
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{second:0,minute:0},
        totalTime:{second:0,minute:0}
    })

    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true)
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false)
    }
    const playWithId=async(id)=>{
        await songsData.map((item)=>{
            if(item.id==id)
                setTrack(item);
        })
        await audioRef.current.play();
    }
    const previous=async()=>{
        songsData.map(async(item,index)=>{
            if(item._id===track._id && index>0){
                await setTrack(songsData[index-1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
                
        })
    }
    const nextsong=async()=>{
        songsData.map(async(item,index)=>{
            if(item._id===track._id && index>0){
                await setTrack(songsData[index+1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
                
        })
    }
    const seeksong=async (e)=>{
       audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration);


    }

    const getSongData=async()=>{
        try{
            const response=await axios.get(`${url}/api/song/list`);
            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);

        }
        catch(err){
            console.log(err);
        }
    }

    const getAlbumData=async()=>{
        try{
            const response=await axios.get(`${url}/api/album/list`);
            setAlbumsData(response.data.albums);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
              if (seekBar.current) {  // ✅ Check if seekBar exists
                seekBar.current.style.width =
                  Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
              }
              setTime({
                currentTime: {
                  second: Math.floor(audioRef.current.currentTime % 60),
                  minute: Math.floor(audioRef.current.currentTime / 60),
                },
                totalTime: {
                  second: Math.floor(audioRef.current.duration % 60) || 0, // ✅ Avoid NaN issues
                  minute: Math.floor(audioRef.current.duration / 60) || 0,
                },
              });
            };
          }, 1000);
          
    },[audioRef])

    useEffect(()=>{ 
        getSongData();
        getAlbumData();
    },[])



    const contextValue={
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,nextsong,
        seeksong,
        songsData,
        albumsData
    }
    return(
        <PlayerContext.Provider  value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;