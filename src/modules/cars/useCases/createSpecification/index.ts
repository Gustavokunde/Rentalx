import { CategoriesRepository } from "../../repositories/implementarions/CategoriesRepository";
import { CreateCategoryControler } from "./CreateSpecificationController";
import { CreateCategoryUseCase } from "./CreateSpecificationUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryControler(
  createCategoryUseCase
);

export { createCategoryController };
