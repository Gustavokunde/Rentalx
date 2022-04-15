import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/**/*{.ts,.js}"],
  entities: ["./src/modules/**/entities/*.ts"],
  logging: false,
  synchronize: false,
  name: "default",
});

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));
