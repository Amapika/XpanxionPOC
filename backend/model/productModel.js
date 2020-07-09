import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const prodctSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  company: { type: String, required: true },
  info: { type: String, required: true },
  inCart: { type: Boolean,default:false},
  countInStock: { type: Number, default: 0, required: true },
 count: { type: Number, default: 0 },
 total: { type: Number, default: 0 },
  category: { type: String, required: true },
});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
