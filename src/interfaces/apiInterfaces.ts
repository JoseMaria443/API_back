export interface IGame {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
    genres: { id: number; name: string; slug: string }[];
    platforms?: any[];
    metacritic?: number;
}

export interface IGamesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IGame[];
}

export interface IGenre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface IGenresResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IGenre[];
}