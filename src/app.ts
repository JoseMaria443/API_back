import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';

const app: Application = express();
const PORT = process.env.PORT || 4000;

// CORS configuration - permite múltiples orígenes de localhost
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Permite requests sin origin (como apps móviles o curl)
        if (!origin) return callback(null, true);
        
        // Permite cualquier localhost en desarrollo
        if (origin.startsWith('http://localhost:')) {
            return callback(null, true);
        }
        
        // Permite orígenes específicos
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