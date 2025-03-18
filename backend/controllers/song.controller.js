import { v2 as cloudinary } from "cloudinary";
import SongModel from "../models/song.model.js";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const duration = `${Math.floor(audioUpload.duration / 60)}:${
      audioUpload.duration % 60
    }`;
    const songData = {
      name: name,
      desc: desc,
      album: album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration: duration,
    };
    const song = SongModel(songData);
    await song.save();
    res.status(201).json({ message: "Song Added", song: song });
    // console.log(
    //   name,
    //   desc,
    //   album,
    //   audioFile,
    //   imageFile,
    //   audioUpload,
    //   imageUpload
    // );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const listSong = async (req, res) => {
    try{
        const allSongs=await SongModel.find({});
        res.status(200).json({songs:allSongs});

    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const removeSong = async (req, res) => {
    try{
        await SongModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ message: "Song Removed" });  
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export { addSong, listSong,removeSong};
