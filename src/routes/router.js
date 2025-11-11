import { Router } from 'express';
import { productRoutes } from '../models/products/product.route.js';
import { userRoutes } from '../models/users/user.routes.js';

export const router = Router();

const routes = [
  {
    path: '/users',
    router: userRoutes,
  },
  {
    path: '/products',
    router: productRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.router);
});
