import { Product } from './product.model.js';

const createProductService = async (payload) => {
  //create product in mongodb database
  const product = await Product.create(payload);
  return product;
};

export const productServices = {
  createProductService,
};
