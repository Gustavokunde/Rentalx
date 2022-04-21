import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationControler } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);

const createSpecificationController = new CreateSpecificationControler();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
