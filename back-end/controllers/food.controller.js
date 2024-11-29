import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
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
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
    console.log(error);
  }
};

const getAllFoods = async (request, response) => {
  try {
    const result = await Food.find();

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
    console.log("Fetch food failed");
  }
};

export { createFood, getAllFoods };
