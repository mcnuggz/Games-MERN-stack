import mongoose from "mongoose";

const gameSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        platform: {
            type: String,
            required: true,
        },
        developer: {
            type: String,
            required: false,
        },
        publisher: {
            type: String,
            required: false,
        },
        releaseYear: {
            type: Number,
            required: false,
        },
    },
    { timestamps: true }
);

export const Game = mongoose.model("Game", gameSchema);
