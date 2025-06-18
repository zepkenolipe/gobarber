import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "admin",
  database: "gobarber",
  entities: ["./src/modules/*/infra/typeorm/entities/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
}); 