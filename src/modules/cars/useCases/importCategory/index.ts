import { CategoriesRepository } from "../../repositories/implementarions/CategoriesRepository";
import { ImportCategoryControler } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryControler(
  importCategoryUseCase
);

export { importCategoryController };
