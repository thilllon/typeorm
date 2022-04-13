import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import express from "express";

dotenv.config();
const port = process.env.PORT || 4444;
// ******************************
const synchronize = true;
// ******************************

const connectionOtions: any = {
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: 'root',
  // database: 'typeorm',
  // ssl: false,
  // ******************************
  host: "postgres-tutorial.postgres.database.azure.com",
  port: 5432,
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  database: "postgres",
  ssl: true,
};

const main = async () => {
  const app = express();
  app.listen(port, () => {
    console.info("listen");
  });
  try {
    const connection = await createConnection({
      type: "postgres",
      // entities: ['src/entities/*.ts'],
      entities: [Client, Banker],
      synchronize, // 중요
      ...connectionOtions,
    });

    console.log("conntected to postgres");
  } catch (err) {
    console.error(err);
  }
};

main();
