import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationInMemory } from "../../repositories/in-memory/SpecificationMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carRepositoryInMmemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new SpecificationInMemory();
    carRepositoryInMmemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMmemory,
      specificationsRepositoryInMemory
    );
  });

  it("should not be able to add a new specification to a nonexistent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["5,4,3,2,1"];
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to a car", async () => {
    const car = await carRepositoryInMmemory.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test",
    });
    const specifications_id = [specification.id];
    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.speficiations.length).toBe(1);
  });
});
