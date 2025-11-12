import { Blog } from "./blog.model.js";

const createBlog = async (payload) => {
  console.log(payload);
  // create blog in mongodb database
  const blog = await Blog.create(payload);
  return blog;
};

const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
}

const getSingleBlog = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
}

export const blogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
