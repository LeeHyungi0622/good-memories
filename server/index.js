import express from 'express';
import cors from 'cors';
import postRouter from './routes/posts';
import mongoose from 'mongoose';

const app = express();

app.use('/posts', postRouter);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
// mongodb
const CONNECTION_URL = 'mongodb+srv://goodmemories:goodmemories123@cluster1.jgpwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // promise / mongodb connection이 성공하면,
    .then(() => app.listen(PORT, console.log(`https://localhost:${PORT}`)))
    // mongodb connection이 실패하면,
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);