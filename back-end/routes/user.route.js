import express from "express";
import {
  createUser,
  deleteUsers,
  getAllUsers,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", createUser);
userRouter.delete("/users", deleteUsers);

export default userRouter;
