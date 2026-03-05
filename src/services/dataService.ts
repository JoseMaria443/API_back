import axios from 'axios';
import type { IGamesResponse, IGenresResponse } from '../interfaces/apiInterfaces.js';

const API_BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.API_KEY;

export const getGames = async (search?: string, genres?: string, pageSize?: string, ordering?: string): Promise<IGamesResponse> => {
  try {
    const params: any = {
      key: API_KEY,
      page_size: pageSize || 20,
      ordering: ordering || '-rating'
    };

    if (search) {
      params.search = search;
    }

    if (genres) {
      params.genres = genres;
    }

    const response = await axios.get(`${API_BASE_URL}/games`, { params });

    if (!response.data) {
      throw new Error('No data received from RAWG API');
    }

    return {
      count: response.data.count || 0,
      next: response.data.next || null,
      previous: response.data.previous || null,
      results: response.data.results || []
    };
  } catch (error: any) {
    console.error('RAWG API Error:', error.response?.data || error.message);
    throw new Error(`Error al consumir la API de RAWG: ${error.response?.data?.detail || error.message}`);
  }
};

export const getGenres = async (): Promise<IGenresResponse> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genres`, {
      params: {
        key: API_KEY
      }
    });

    if (!response.data) {
      throw new Error('No data received from RAWG API');
    }

    return {
      count: response.data.count || 0,
      next: response.data.next || null,
      previous: response.data.previous || null,
      results: response.data.results || []
    };
  } catch (error: any) {
    console.error('RAWG API Error:', error.response?.data || error.message);
    throw new Error(`Error al consumir la API de géneros de RAWG: ${error.response?.data?.detail || error.message}`);
  }
};