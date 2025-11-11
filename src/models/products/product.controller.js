import { createAsyncFn } from '../../utils/createAsyncFn.js';
import { sendResponse } from '../../utils/send.response.js';
import { productServices } from './protuct.services.js';
import httpStatusCode from 'http-status-codes';

const createProductController = createAsyncFn(async (req, res) => {
  const product = await productServices.createProductService(req.body);
  sendResponse(res, {
    success: true,
    message: 'Product created successfully',
    statusCode: httpStatusCode.CREATED,
    data: product,
  });
});

const getAllProductsController = createAsyncFn(async (req, res) => {
  const products = await productServices.getAllProducts();
  sendResponse(res, {
    success: true,
    message: 'Products retrieved successfully',
    statusCode: httpStatusCode.OK,
    data: products,
  });
});

const getSingleProductController = createAsyncFn(async (req, res) => {
  const { id } = req.params;
  const product = await productServices.getSingleProduct(id);
  sendResponse(res, {
    success: true,
    message: 'Product retrieved successfully',
    statusCode: httpStatusCode.OK,
    data: product,
  });
});

export const productController = {
  createProductController,
  getAllProductsController,
  getSingleProductController,
};
