import { model, Schema } from 'mongoose';

const createBlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], required: false },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const Blog = model('Blog', createBlogSchema);
