import { Router } from "express";
import { userController } from "./user.controller.js";

const router = Router();

router.post('/create-user', userController.createUser);
router.get('/', userController.getAllUsers);
export const userRoutes = router;
