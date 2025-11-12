import { Blog } from "./blog.model.js";

const createBlog = async (payload) => {
  console.log(payload);
  // create blog in mongodb database
  const blog = await Blog.create(payload);
  return blog;
};

export const blogService = {
  createBlog,
};
