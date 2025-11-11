import { Router } from 'express';
import { productController } from './product.controller.js';

const router = Router();

router.post('/create-product', productController.createProductController);
router.get('/', productController.getAllProductsController);
export const productRoutes = router;
