import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from '../App.jsx';
import { toast } from 'react-toastify';

const ListAlbum = () => {
  const [data,setData]=useState([]);
  const fetchAlbums=async()=>{
    try{
    const response=await axios.get(`${url}/api/album/list`);
    console.log("API response",response);
    if(response.status===200){
      setData(response.data.albums);
    }
  }catch(err){
    toast.error('Error occured');
    console.log(err);
  }
}
const removeSong = async (id) => {
  try{
    const response=await axios.post(`${url}/api/album/remove`,{id:id});
    console.log(response);
    if(response.status===200){
      toast.success('Album Removed');
      await  fetchAlbums();
    }
  }catch(err){
    toast.error('Error occured');
    console.log(err);
  }
}
useEffect(() => {
  fetchAlbums();
}, [])
  return (
    <div>
      <p>All Albums List</p>
      <br/>
      <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border-gray-300 text-sm mr-5 bg-gray-100 ">
        <b >Image</b>
        <b >Name</b>
        <b >Album</b>
        <b >Album Color</b>
        <b >Action</b>
      </div>
      {data.map((item,index) => {
        return(
        <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
          <img src={item.image} className="w-12" alt="item img"/>
          <p>{item.name}</p>
          <p>{item.desc}</p>
          <input type='color' value={item.bgColor}/>
          <p>
            <button onClick={()=>removeSong(item._id)} className="bg-green-800 text-white p-1 rounded">Remove</button>
          </p>
          
        </div>
        )
      })}
      
    </div>
    
  )
}

export default ListAlbum
