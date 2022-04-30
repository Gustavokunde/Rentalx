import { CarsRepository } from "../../infra/typeorm/repositories/CarsRespository";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be possible to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand",
      category_id: "category",
      name: "Car",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      name: "Car 1",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "category_id",
    });

    expect(cars).toEqual([car]);
  });
});
