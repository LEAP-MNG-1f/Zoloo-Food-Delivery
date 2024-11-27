import express from "express";
import { createOrder, getAllOrders } from "../controllers/index.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);

export { orderRouter };
