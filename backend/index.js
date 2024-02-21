import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import gamesRoute from "./routes/gamesRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"],
//     })
// );

app.get("/", (req, res) => {
    return res.status(234).send("Welcome to MERN Stack!");
});

app.use("/games", gamesRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
