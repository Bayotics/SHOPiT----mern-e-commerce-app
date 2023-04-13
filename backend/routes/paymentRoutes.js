import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Payment from '../models/paymentModel.js';
import { isAuth } from '../utils.js';

const paymentRouter = express.Router();
paymentRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newPayment = new Payment({
        shippingAddress: req.body.shippingAddress,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
        message: req.body.message,
        paidAt: req.body.paidAt,
        reference: req.body.reference,
        status: req.body.status,
        transaction: req.body.transaction,
    });

    const payment = await newPayment.save();
    res.status(201).send({ message: 'New Payment Created', payment });
  })
);
paymentRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const payments = await Payment.find({ user: req.user._id });
    res.send(payments);
  })
);

paymentRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const payment = await Payment.findById(req.params.id);
    if (payment) {
      res.send(payment);
    } else {
      res.status(404).send({ message: 'Payment Log Not Found' });
    }
  })
);


export default paymentRouter;