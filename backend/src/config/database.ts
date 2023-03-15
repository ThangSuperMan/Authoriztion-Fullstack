import mariadb, { createPool, PoolConnection } from "mariadb";
import dotenv from "dotenv";
import logging from "../utils/logging";

dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT),
});

let connect: PoolConnection;

export const connectDatabase = async () => {
  try {
    if (!connect) {
      connect = await pool.getConnection();
      logging.success("Get connection to database success");
    }
    return connect;
  } catch (error) {
    logging.error("Get connection to database failure", error);
  }
};
