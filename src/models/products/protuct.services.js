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

const getSingleProduct = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const productServices = {
  createProductService,
  getAllProducts,
  getSingleProduct,
};
