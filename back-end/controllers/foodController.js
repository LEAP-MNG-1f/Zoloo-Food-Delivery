import { request, response } from "express";
import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    name: "Burger",
    image: "image",
    ingredient: "2 talh 1 mah bna",
    price: 15000,
  });
  response.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (request, response) => {
  const result = await Food.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFoods };
