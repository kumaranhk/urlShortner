import express from "express";
import authRoutes from "../controllers/auth/auth.routes.js";
import urlRouter from "../controllers/url/url.routes.js";

const router = express.Router();

router.use('/auth',authRoutes);
router.use('/url',urlRouter);

export default router;