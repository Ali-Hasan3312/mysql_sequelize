import express from 'express'
import { createUser, findUser, updateUser } from '../controllers/User.Controller.js'

const userRouter = express.Router()

userRouter.post("/create",createUser)
userRouter.route("/:id").get(findUser).put(updateUser)

export {userRouter}

