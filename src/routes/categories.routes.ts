import { Router } from "express";
import multer from "multer";

import { CreateCategoryControler } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryControler } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryControler();
const importCategoryController = new ImportCategoryControler();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
