import type { Request, Response } from 'express';
import * as DataService from '../services/dataService.js';

export const getData = async (req: Request, res: Response) => {
  try {
    const data = await DataService.getExternalData();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(502).json({ 
        message: "Bad Gateway: La API externa no responde", 
        error: error.message 
    });
  }
};