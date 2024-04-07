import { Connection } from "mysql";
import { Express } from "express";
import bodyParser from 'body-parser';
// import { errorValidationMiddleware } from "../middleware/errorValidationMiddleware";



export const newEvent = (app: Express, db: Connection) => {
    app.post("/v1/api/events", (req, res) => {
        const { title, description, location, datetime } = req.body;

        const query = 'INSERT INTO events (title, description, location, date_time) VALUES (?, ?, ?, ?)';

        // todo: extract to middleware
        const errorFields: string[] = [];
        if(!title) {
            errorFields.push("title");
        }
        if(!description) {
            errorFields.push("description");
        }
        if(!location) {
            errorFields.push("location");
        }
        if(!datetime) {
            errorFields.push("date_time");
        }

        if(errorFields.length) {
            return res.status(400).json({ error: "Incorrect request fields", fields: errorFields });
        }

        db.query(query, [title, description, location, datetime], (error, result) => {
            if (error) {
                return res.status(500).json({
                    status: 500,
                    error: "Failed to insert data",
                });
            } else {
                return res.status(200).json({
                    status: 200,
                    event: { id: result.insertId, title, description, location, date_time: datetime },
                });
            }
        });
    })

    app.get("/v1/api/events", (req, res) => {
        const { page, per_page } = req.params; // todo: complete<<
        const query = 'SELECT * FROM events';

        db.query(query, (error, result) => {
            if (error) {
                res.status(500).json({ error: "Can not load events" });
            } else {
                res.status(200).json({
                    result,
                });
            }
        });
    })
}
