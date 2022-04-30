import { ICarsRepository } from "src/modules/cars/repositories/ICarsRepository";
import { Car } from "../../infra/typeorm/entities/Cars";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}
class ListAvailableCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}
  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAllAvailable(
      brand,
      category_id,
      name
    );
    return cars;
  }
}

export { ListAvailableCarsUseCase };
