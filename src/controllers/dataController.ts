import type { Request, Response } from 'express';
import * as DataService from '../services/dataService.js';

export const getGames = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const genres = req.query.genres as string | undefined;
    const pageSize = req.query.page_size as string | undefined;
    const ordering = req.query.ordering as string | undefined;
    const gamesResponse = await DataService.getGames(search, genres, pageSize, ordering);
    res.status(200).json(gamesResponse);
  } catch (error: any) {
    res.status(502).json({ 
        message: "Bad Gateway: La API externa no responde", 
        error: error.message 
    });
  }
};

export const getGenres = async (req: Request, res: Response) => {
  try {
    const genresResponse = await DataService.getGenres();
    res.status(200).json(genresResponse);
  } catch (error: any) {
    res.status(502).json({ 
        message: "Bad Gateway: La API externa no responde", 
        error: error.message 
    });
  }
};