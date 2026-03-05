import axios from 'axios';
import type { IGame, IGenre } from '../interfaces/apiInterfaces.js';

const API_BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.API_KEY;

export const getGames = async (search?: string): Promise<IGame[]> => {
  try {
    const params: any = {
      key: API_KEY,
      page_size: 20,
      ordering: '-rating'
    };

    if (search) {
      params.search = search;
    }

    const response = await axios.get(`${API_BASE_URL}/games`, { params });

    if (!response.data.results) {
      throw new Error('No results found in RAWG API response');
    }

    return response.data.results;
  } catch (error: any) {
    console.error('RAWG API Error:', error.response?.data || error.message);
    throw new Error(`Error al consumir la API de RAWG: ${error.response?.data?.detail || error.message}`);
  }
};

export const getGenres = async (): Promise<IGenre[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genres`, {
      params: {
        key: API_KEY
      }
    });

    if (!response.data.results) {
      throw new Error('No genres found in RAWG API response');
    }

    return response.data.results;
  } catch (error: any) {
    console.error('RAWG API Error:', error.response?.data || error.message);
    throw new Error(`Error al consumir la API de géneros de RAWG: ${error.response?.data?.detail || error.message}`);
  }
};