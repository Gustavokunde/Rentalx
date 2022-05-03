import { Repository } from "typeorm";
import { ICreateCarDTO } from "../../../../cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../../cars/repositories/ICarsRepository";
import { Car } from "../entities/Cars";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository;
  }

  async create(request: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(request);
    await this.repository.save(request);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ where: { license_plate } });
    return car;
  }

  async findAllAvailable(
    brand: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available=:available", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand =:brand", { brand });
    }

    if (name) {
      carsQuery.andWhere("c.name =:name", { name });
    }

    if (category_id) {
      carsQuery.andWhere("c.category_id =:category_id", { category_id });
    }

    const cars = await carsQuery.getMany();
    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne({ where: { id } });
    return car;
  }
}

export { CarsRepository };
