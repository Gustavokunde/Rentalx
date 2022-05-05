import { ICarsRepository } from "src/modules/cars/repositories/ICarsRepository";
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRespository";
import { ICarsImagesRepository } from "src/modules/cars/repositories/ICarsImageRepository";
import { CarsImageRepository } from "src/modules/cars/infra/typeorm/repositories/CarsImageRepository";
import {
  IRentsRepository,
  RentsRepository,
} from "src/modules/rentals/repositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  "CarsImageRepository",
  CarsImageRepository
);

container.registerSingleton<IRentsRepository>(
  "RentsRepository",
  RentsRepository
);
