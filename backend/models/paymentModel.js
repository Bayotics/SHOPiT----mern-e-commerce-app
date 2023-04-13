import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    paidAt: { type: Date },
    reference: {type: String},
    status: {type: String, required: true},
    transaction: {type: String},
    shippingAddress: {type: String},
    totalPrice: {type: Number}

  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;