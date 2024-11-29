import { Category } from "../model/category.model.js";

const createCategory = async (request, response) => {
  try {
    const result = await Category.create({
      name: "Main dish",
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
    console.log("Create category failed");
  }
};

const getAllCategory = async (request, response) => {
  try {
    const result = await Category.find();

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

export { createCategory, getAllCategory };
