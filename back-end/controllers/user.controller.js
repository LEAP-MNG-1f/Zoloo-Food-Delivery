import { User } from "../model/user.model.js";

const createUser = async (request, response) => {
  try {
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
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
    console.log("Create user data failed");
  }
};

const getAllUsers = async (request, response) => {
  try {
    const result = await User.find();
    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
    console.log("Fetch user data failed");
  }
};

const deleteUsers = async (request, response) => {
  try {
    const result = await User.findByIdAndDelete({
      _id: "674932638079b8819f543c71",
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
    console.log("Delete user failed");
  }
};

export { createUser, getAllUsers, deleteUsers };
