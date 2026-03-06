import type { Request, Response } from 'express';
import * as DataService from '../services/dataService.js';

export const getGames = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const genres = req.query.genres as string | undefined;
    const pageSize = req.query.page_size as string | undefined;
    const ordering = req.query.ordering as string | undefined;
    const page = req.query.page as string | undefined;
    const gamesResponse = await DataService.getGames(search, genres, pageSize, ordering, page);
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

export const getGameDetails = async (req: Request, res: Response) => {
  try {
    const gameId = Number(req.params.gameId);

    if (Number.isNaN(gameId)) {
      return res.status(400).json({ message: 'Parámetro gameId inválido' });
    }

    const gameDetails = await DataService.getGameDetails(gameId);
    return res.status(200).json(gameDetails);
  } catch (error: any) {
    return res.status(502).json({
      message: 'Bad Gateway: La API externa no responde',
      error: error.message
    });
  }
};

export const getGameScreenshots = async (req: Request, res: Response) => {
  try {
    const gameId = Number(req.params.gameId);

    if (Number.isNaN(gameId)) {
      return res.status(400).json({ message: 'Parámetro gameId inválido' });
    }

    const screenshots = await DataService.getGameScreenshots(gameId);
    return res.status(200).json(screenshots);
  } catch (error: any) {
    return res.status(502).json({
      message: 'Bad Gateway: La API externa no responde',
      error: error.message
    });
  }
};

export const getGameTrailers = async (req: Request, res: Response) => {
  try {
    const gameId = Number(req.params.gameId);

    if (Number.isNaN(gameId)) {
      return res.status(400).json({ message: 'Parámetro gameId inválido' });
    }

    const trailers = await DataService.getGameTrailers(gameId);
    return res.status(200).json(trailers);
  } catch (error: any) {
    return res.status(502).json({
      message: 'Bad Gateway: La API externa no responde',
      error: error.message
    });
  }
};