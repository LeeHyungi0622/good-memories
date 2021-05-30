import express from 'express';
import cors from 'cors';
import postRouter from './routes/posts';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRouter);
app.get('/', (req, res) => {
    res.send('Hello to memories API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // promise / mongodb connection이 성공하면,
    .then(() => app.listen(PORT, console.log(`https://localhost:${PORT}`)))
    // mongodb connection이 실패하면,
    .catch((err) => console.log(err.message));