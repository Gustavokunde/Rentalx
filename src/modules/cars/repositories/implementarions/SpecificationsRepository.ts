import { Specification } from "../../models/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

//DTO

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  create({ description, name }: ICreateSpecificationDTO): void {}
  list(): Specification[] {
    return;
  }
  findByName(name: string) {
    return null;
  }
}

export { SpecificationsRepository };
