import { Router } from "express";
import { CreateSpecificationControler } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationControler();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
