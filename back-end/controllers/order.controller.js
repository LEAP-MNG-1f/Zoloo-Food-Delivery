import { Order } from "../model/order.model.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create({
      userId: "67492365caedbe125099876b",
      orderNumber: 1,
      totalPrice: "195000",
      // foodIds: "",
      process: "Progress",
      createdDate: "",
      district: "Han-Uul Duureg",
      khoroo: "13-r",
      apartment: "57",
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
    console.log("Create order failed");
  }
};

const getAllOrders = async (request, response) => {
  try {
    const result = await Order.find().populate("userId"); // userId field & foodIds field dr bgaa data-g avna
    // .populate("foodIds")
    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
    console.log("Fetch order failed");
  }
};

export { createOrder, getAllOrders };
