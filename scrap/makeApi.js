import fs from 'fs';
import MovieModel from '../models/MovieModel.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' })

mongoose.connect(`${process.env.MONGO_AUTH}/sessaoDaTarde`)
    .then(console.log("Database connection: Success"))
    .catch(err => console.error("Database connection: Error", err));

(() => {
    fs.readFile('sanitized.json', async (err, data) => {
        if (!err) {
            let json = JSON.parse(data);
            for (let obj of json) {
                const { date, title } = obj;
                 await MovieModel.create({
                    date,
                    title
                });
            }
        }
    })
})();