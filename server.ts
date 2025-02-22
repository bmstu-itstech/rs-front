import "express-async-errors";
import "dotenv/config";
import next from "next";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import api from "./server/src/routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", api);

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017";
const dev = process.env.NODE_ENV !== 'production';

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ message: err.message });
});

const frontend = next({ dev });
const handle = frontend.getRequestHandler();
frontend.prepare().then(() => {
    app.use("*", (req, res) => handle(req, res));
});

async function start() {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected.");
    app.listen(PORT, () => console.log("Server started"));
};

start();
