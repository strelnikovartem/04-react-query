import axios from 'axios';
import type { Movie } from '../types/movie';

const key = import.meta.env.VITE_TMDB_TOKEN;

interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

const options = {
  method: 'GET',

  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};

const url = `https://api.themoviedb.org/3/search/movie`;

export default async function fetchMovies(
  userRequest: string,
  page: number
): Promise<MovieResponse> {
  const response = await axios.get<MovieResponse>(
    `${url}?query=${userRequest}&page=${page}`,
    options
  );
  return response.data;
}
