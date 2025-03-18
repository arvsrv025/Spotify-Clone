import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {
  const [data,setData] = useState([]);

  const fetchData = async () => {
    try{
    const response = await axios.get(`${url}/api/song/list`);
    console.log(response);
    if(response.status==200){
      toast.success('Songs fetched');
      setData(response.data.songs);
    }
    else{
      toast.error('Failed to fetch songs');
    }
  
    }catch(err){  
      toast.error('Error occured');
      console.log(err);
    }
  }
  const removeSong = async (id) => {
    try{
      const response=await axios.post(`${url}/api/song/remove`,{id:id});
      console.log(response);
      if(response.status==200){
        toast.success('Song Removed');
        fetchData();
      }
    }catch(err){
      toast.error('Error occured');
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData(); 
  }, [])
  return (
    <div>
      <p>All Songs List</p>
    <br/>
    <div>
      <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 text-sm mr-5 bg-gray-100 ">
        <b >Image</b>
        <b >Name</b>
        <b >Album</b>
        <b >Duration</b>
        <b >Action</b>
      </div>
      {data.map((item,index) => {
        return(
        <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
          <img src={item.image} className="w-12" alt="item img"/>
          <p>{item.name}</p>
          <p>{item.album}</p>
          <p>{item.duration.substr(0,4)}</p>
          <p>
            <button onClick={()=>removeSong(item._id)} className="bg-green-800 text-white p-1 rounded">Remove</button>
          </p>
          
        </div>
        )
      })}
    </div>
      
    </div>
  )
}

export default ListSong
