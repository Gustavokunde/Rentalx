import { Repository } from "typeorm";

import { Category } from "../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";
import { AppDataSource } from "../../../../../shared/infra/typeorm";

//DTO

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ description, name });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ where: { name } });
    return category;
  }
}

export { CategoriesRepository };
