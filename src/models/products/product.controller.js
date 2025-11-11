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

export const productController = {
  createProductController,
};
