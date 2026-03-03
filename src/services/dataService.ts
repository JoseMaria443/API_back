import axios from 'axios';
import type { IExternalData } from '../interfaces/apiInterfaces.js';

const API_URL = process.env.EXTERNAL_API_URL;
const API_KEY = process.env.API_KEY;

export const getExternalData = async (): Promise<IExternalData[]> => {
  try {
    const response = await axios.get(API_URL!, {
      params: {
        key: API_KEY,
        ordering: '-added',
        page_size: 20
      }
    });

    if (!response.data.results) {
      throw new Error('No results found in RAWG API response');
    }

    return response.data.results.map((item: any) => ({
      id: item.id,
      title: item.name,
      description: item.description || "Sin descripción",
      image_url: item.background_image || ""
    }));
  } catch (error: any) {
    console.error('RAWG API Error:', error.response?.data || error.message);
    throw new Error(`Error al consumir la API de RAWG: ${error.response?.data?.detail || error.message}`);
  }
};