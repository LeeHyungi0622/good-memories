import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
});