import { Router } from 'express';
import { blogController } from './blog.controller.js';

const router = Router();

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getSingleBlog);
router.post('/create-blog', blogController.createBlog);

export const blogRoutes = router;
