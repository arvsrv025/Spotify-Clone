import {v2 as cloudinary} from "cloudinary";
import AlbumModel from "../models/album.model.js";

const addAlbum = async (req, res) => {
    try{
        const name=req.body.name
        const desc=req.body.desc;
        const bgColor=req.body.bgColor;
        const imageFile=req.file;
        const imageUpload=await cloudinary.uploader.upload(imageFile.path);

        const newAlbum={
            name:name,
            desc:desc,
            bgColor:bgColor,
            image:imageUpload.secure_url
        };
        const album=AlbumModel(newAlbum);
        await  album.save();

        res.status(201).json({message:"Album added successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
};

const listAlbum = async (req, res) => {
    try{
        const addAlbum=await AlbumModel.find();
        res.status(200).json({albums:addAlbum});

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});

    }
};

const removeAlbum = async (req, res) => {
    try{
        const id=req.body.id;
        await AlbumModel.findByIdAndDelete(id);
        res.status(200).json({message:"Album removed successfully"});
    }catch(errror){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
};

export {addAlbum, listAlbum, removeAlbum};