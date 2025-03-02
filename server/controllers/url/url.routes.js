import express from "express";
import { urlController } from "./url.controller.js";
import { isAuthenticated } from "../../middlewares/authMiddleware.js";

const urlRouter = express.Router();
// urlRouter.use(isAuthenticated);

urlRouter.post('/', isAuthenticated, urlController.create);
urlRouter.get('/:id?', isAuthenticated, urlController.read);
urlRouter.delete('/:id', isAuthenticated, urlController.remove);
urlRouter.get('/nav/:id', urlController.navigateToactual);

export default urlRouter;