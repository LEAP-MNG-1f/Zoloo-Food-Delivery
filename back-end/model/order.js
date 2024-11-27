import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: User, //Ali model tei hamaaraltai ve
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
