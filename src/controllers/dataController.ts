import type { Request, Response } from 'express';
import * as DataService from '../services/dataService.js';

export const getGames = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const games = await DataService.getGames(search);
    res.status(200).json(games);
  } catch (error: any) {
    res.status(502).json({ 
        message: "Bad Gateway: La API externa no responde", 
        error: error.message 
    });
  }
};

export const getGenres = async (req: Request, res: Response) => {
  try {
    const genres = await DataService.getGenres();
    res.status(200).json(genres);
  } catch (error: any) {
    res.status(502).json({ 
        message: "Bad Gateway: La API externa no responde", 
        error: error.message 
    });
  }
};