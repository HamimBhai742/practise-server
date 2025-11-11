import { Schema } from 'mongoose';

const createUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    age: { type: Number, min: 18, max: 100 },
    address: { type: String },
    phone: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = model('User', createUserSchema); // Export the User model
