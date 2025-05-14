import express from 'express';
import userRoute from './routes/route.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use('/api', userRoute);


app.get('/', (req, res) => {
    res.send('URL Shortener API is running.');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
