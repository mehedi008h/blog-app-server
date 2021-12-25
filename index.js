import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import blogRoutes from './routes/blogs.js';

const app = express();
dotenv.config();

app.use(cors());

app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));