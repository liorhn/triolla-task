import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { initDatabase } from "./database/db";
import { newEvent } from "./event/newEvent";

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(bodyParser.json());

const db = initDatabase();


newEvent(app, db);      


app.listen(4000, () => {
    console.log("Running on server 4000!");
});