import { CategoriesRepository } from "../../repositories/implementarions/CategoriesRepository";
import { CreateCategoryControler } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryControler(
  createCategoryUseCase
);

export { createCategoryController };
