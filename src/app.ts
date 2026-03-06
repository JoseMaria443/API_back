import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';

const app: Application = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        
        if (origin.startsWith('http://localhost:')) {
            return callback(null, true);
        }
        
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        
        callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada en el Backend" });
});

export default app;