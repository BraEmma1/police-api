import express from "express";
import statementsRouter from "./routes/statements.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";


// creating App
const app = express();

dbConnection();

//apply middlewares
app.use(express.json());

//defining routes
app.use(statementsRouter);


let serverPort = 3500

app.listen (serverPort, ( ) => {
    console.log(`the server is listening on port ${serverPort}`);
});
