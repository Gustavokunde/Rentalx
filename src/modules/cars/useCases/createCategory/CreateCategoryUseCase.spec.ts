import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let categoriesRespositoryIMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;
describe("Create Category", () => {
  beforeEach(() => {
    categoriesRespositoryIMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRespositoryIMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRespositoryIMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should be able to create a new category", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
