import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import 'dotenv/config'

import MovieModel from './models/MovieModel.js';

const port = process.env.PORT
const app = express();

app.use(express.json());
app.use(cors());

app.get("/:year/:month/:day", async (req, res) => {

    const { year, month, day } = req.params;
    try {
        const yearDB = await MovieModel.findOne({ year });
        const movie = yearDB.months[month][day];
        res.status(200).json({ movie });
    }
    catch (err) {
        res.status(404).json({ msg: "Movie information not available for the date." });
    }
})

mongoose.connect(`${process.env.MONGO_AUTH}/sessaoDaTarde`)
    .then(console.log("Database connection: Success"))
    .catch(err => console.error("Database connection: Error", err));

app.listen(port, console.log(`Server available on port :${port}`));