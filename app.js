import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import {dbConnect} from './config/db.js'
import { User } from './models/User.Model.js'
import { Product } from './models/Product.Model.js'
import { userRouter } from './routes/User.Route.js'

dotenv.config()
const app = express()
dbConnect()
User.sync({ alter: true})
Product.sync({ alter: true})
app.use(express.json())
app.use(morgan("dev"))
const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("<h1>Sequelize Server</h1>")
    
})
app.use("/",userRouter)
app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
    
})