import express, { Request, Response } from 'express'
import { PoolConnection } from 'mariadb'
import dotenv from 'dotenv'
import logging from './utils/logging'
import authRoute from './routes/auth'

dotenv.config({ path: '.env' })
const app = express()
const PORT = process.env.PORT || 5000

interface Person {
  name: String
}

// MIDDLEWARES
app.use(express.json())

// ROUTES
app.use('/v1/auth', authRoute)

// app.get("/", async (req: Request, res: Response) => {
//   let connect: PoolConnection;
//   let persons: Person[];
//   try {
//     connect = await connectDatabase();
//     const query = "select * from users;";

//     persons = await connect.query(query);

//     console.log("persons :>> ", persons);

//     // res.status(200).send(persons);
//     res.status(200).send(persons);
//   } catch (error) {
//     logging.error(`Error ${error.message}`);
//   } finally {
//     console.log("finally here");
//     if (connect) {
//       if (connect) {
//         // connect.release();
//         // return;
//       }
//     }
//   }
// });

app.listen(PORT, () => {
  logging.success(`Server is listening on the port: ${PORT}`)
})
