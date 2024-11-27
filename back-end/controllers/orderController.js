import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "195000",
    customer: "674691dfbdfcec98377c0879",
  });
  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("customer"); // customer Field dr bgaa data-g avna

  response.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
