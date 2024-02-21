import express from "express";
import { Game } from "../models/gameModel.js";

const router = express.Router();

// create new game entry in db
router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.platform) {
            res.status(400).send({
                message: "Send all required fields: Title and System",
            });
        } else {
            const newGame = {
                title: req.body.title,
                platform: req.body.platform,
                developer: req.body.developer,
                publisher: req.body.publisher,
                releaseYear: req.body.releaseYear,
            };
            const game = await Game.create(newGame);
            return res.status(201).send(game);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Route for getting all games from db
router.get("/", async (req, res) => {
    try {
        const games = await Game.find({});
        return res.status(200).json({
            count: games.length,
            data: games,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Route for getting a single game by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const game = await Game.findById(id);
        return res.status(200).json(game);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Updating game in database
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.platform) {
            res.status(400).send({
                message: "Send all required fields: Title and System",
            });
        }
        const { id } = req.params;
        const result = await Game.findByIdAndUpdate(id, req.body);
        if (!result) {
            res.status(404).send({ message: "Game Not Found" });
        }
        res.status(200).send({ message: "Game updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// deleting game from database
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Game.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send({ message: "Game Not Found" });
        }
        res.status(200).send({ message: "Game removed successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
