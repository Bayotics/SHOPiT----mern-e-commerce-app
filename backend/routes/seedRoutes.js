import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
import Payment from '../models/paymentModel.js'

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await Payment.remove({});
  const createdPayments = await Payment.insertMany(data.payments);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  // res.send({ createdProducts, createdUsers, createdPayments}); repop
});
export default seedRouter;