import { Router } from 'express';
import { getGames, getGenres } from '../controllers/dataController.js';

const router = Router();

router.get('/games', getGames);
router.get('/genres', getGenres);

export default router;
