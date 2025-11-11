import { model, Schema } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: {
    type: String,
    enum: [
      'Furniture',
      'Electronics',
      'Clothing',
      'Books',
      'Toys',
      'Fashion',
      'Sports',
      'Health',
    ],
    required: true,
  },
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Product = model('Product', productSchema); // Export the Product model
