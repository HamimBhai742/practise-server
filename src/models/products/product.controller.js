import { createAsyncFn } from '../../utils/createAsyncFn.js';
import { productServices } from './protuct.services.js';

const createProductController = createAsyncFn(async (req, res) => {
  const product = productServices.createProductService(req.body);
  sendResponse(res, {
    success: true,
    message: 'Product created successfully',
    statusCode: 201,
    data: product,
  });
});

export const productController = {
  createProductController,
};
