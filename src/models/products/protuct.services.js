import { Product } from './product.model.js';

const createProductService = async (payload) => {
  // create product in mongodb database
  const product = await Product.create(payload);
  return product;
};

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const productServices = {
  createProductService,
  getAllProducts,
};
