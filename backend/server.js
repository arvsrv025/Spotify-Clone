import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './routes/song.route.js'
import albumRouter from './routes/album.route.js'
import connectDB from './configuration/mongodb.config.js';
import connectCloudinary from './configuration/cloudinary.config.js';


//app configuration
const app = express();

const PORT=process.env.PORT || 5000;
connectDB();
connectCloudinary();


//middlwares

app.use(express.json());
app.use(cors());
//to connect the backend and frontend



//routes
app.use('/api/song',songRouter);
app.use('/api/album',albumRouter);
app.get('/',(req,res)=>(
    res.send('Hello World')
))
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})