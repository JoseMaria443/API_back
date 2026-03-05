import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada en el Backend" });
});

export default app;