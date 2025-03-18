import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App.jsx";
import { toast } from "react-toastify";

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [color, setColor] = useState("#fff");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('bgColor', color);

      const response = await axios.post(`${url}/api/album/add`, formData);
      console.log("API response", response);
      //always check for the status code in response object and then set it to 200 or 201
      if (response.status === 201) {
        toast.success("Album Added Successfully");
        setName("");
        setDesc("");
        setImage(false);
        setColor("#fff");
      } else {
        toast.error("Failed to add Album");
      }
    } catch (err) {
      toast.error("Error occured");
      console.log(err);
    }
    setLoading(false);
  };

  return loading ? (
    <div className=" grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16  place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
    >
      <div className="flex flex-col gap-4">
        
        <p>Upload Image</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          accept="image/*"
          hidden
        />
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            className="w-24 cursor-pointer"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Type here"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Type here"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <p>Background Color</p>
        <input
          onChange={(e) => setColor(e.target.value)}
          type="color"
          className="w-20 rounded-lg"
        />
      </div>
      <button className="text-base text-white bg-black py-2.5 px-14 rounded-md cursor-pointer">
        ADD
      </button>
    </form>
  );
};

export default AddAlbum;
