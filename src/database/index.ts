import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/**/*{.ts,.js}"],
  entities: ["./src/modules/**/entities/*{.js,.ts}"],
  logging: false,
  synchronize: false,
  name: "default",
});

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

export { AppDataSource };
