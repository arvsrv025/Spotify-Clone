import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import AddSong from "./pages/AddSong.jsx";
import AddAlbum from "./pages/AddAlbum.jsx";
import ListSong from "./pages/ListSong.jsx";
import ListAlbum from "./pages/ListAlbum.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

export const url = "http://localhost:5000";

const App = () => {
  return (
    <div className="bg-black flex items-start justify-center min-h-screen">
    
      <ToastContainer />
      <Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
      <Navbar/>
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
        <Routes>
           <Route path="/add-song" element={<AddSong/>} />
           <Route path="/add-album" element={<AddAlbum />} />
           <Route path="/list-song" element={<ListSong/>} />
           <Route path="/list-album" element={<ListAlbum />} />
           
        </Routes>

        </div>

      </div>
    </div>
  );
};

export default App;
