import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router()

routes.get('/api/users', UserController.index)
routes.post("/api/users", UserController.create);

export default routes