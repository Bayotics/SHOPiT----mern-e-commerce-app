import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Payment from '../models/paymentModel.js';
import { isAuth } from '../utils.js';

const paymentRouter = express.Router();
paymentRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
        const newOrder = new Payment({
        shippingAddress: req.body.shippingAddress,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
        message: req.body.message,
        paidAt: req.body.paidAt,
        reference: req.body.reference,
        status: req.body.status,
        transaction: req.body.transaction,
    });

    const payment = await newOrder.save();
    res.status(201).send({ message: 'New Payment Created', payment });
  })
);