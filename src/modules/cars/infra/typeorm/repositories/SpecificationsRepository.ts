import { AppDataSource } from "../../../../../shared/infra/typeorm/index";
import { Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../../../repositories/ISpecificationsRepository";

//DTO

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
    return specification;
  }

  findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ where: { name } });

    return specification;
  }

  findByIds(ids: string[]): Promise<Specification[]> {
    return this.repository.findByIds(ids);
  }
  async findById(id: string): Promise<Specification> {
    return this.repository.findOne({ where: { id } });
  }
}

export { SpecificationsRepository };
