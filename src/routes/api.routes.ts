import { Router } from 'express';
import { getGameDetails, getGameScreenshots, getGameTrailers, getGames, getGenres } from '../controllers/dataController.js';

const router = Router();

router.get('/games', getGames);
router.get('/games/:gameId', getGameDetails);
router.get('/games/:gameId/screenshots', getGameScreenshots);
router.get('/games/:gameId/movies', getGameTrailers);
router.get('/genres', getGenres);

export default router;
