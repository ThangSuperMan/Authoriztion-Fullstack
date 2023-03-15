import express, { Request, Response } from "express";
import mariadb, { PoolConnection } from "mariadb";
import dotenv from "dotenv";
import logging from "./utils/logging";
import { connectDatabase } from "./config/database";

dotenv.config({ path: ".env" });
const app = express();
const PORT = process.env.PORT || 5000;

interface Person {
  name: String;
}

app.get("/", async (req: Request, res: Response) => {
  let connect: PoolConnection;
  let persons: Person[];
  try {
    connect = await connectDatabase();
    const query = "select * from persons;";

    persons = await connect.query(query);

    console.log("persons :>> ", persons);

    // res.status(200).send(persons);
    res.status(200).send(persons);
  } catch (error) {
    logging.error(`Error ${error.message}`);
  } finally {
    console.log("finally here");
    if (connect) {
      if (connect) return connect.release();
    }
  }
});

app.listen(PORT, () => {
  logging.success(`Server is listening on the port: ${PORT}`);
});
