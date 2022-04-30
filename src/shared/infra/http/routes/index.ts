import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";
import { usersRoutes } from "./users.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
