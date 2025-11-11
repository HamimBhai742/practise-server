import { Router } from 'express';
import { productRoutes } from '../models/products/product.route.js';

export const router = Router();

const routes = [
  {
    path: '/products',
    router: productRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.router);
});
