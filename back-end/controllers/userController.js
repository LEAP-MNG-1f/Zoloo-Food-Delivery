import { request, response } from "express";
import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Zoloo",
    email: "Zolooboston@gmail.com",
    password: "1234",
    phoneNumber: 99111199,
  });
  response.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (request, response) => {
  const result = await User.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
