export interface IGame {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
    genres: { id: number; name: string }[];
}

export interface IGenre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}