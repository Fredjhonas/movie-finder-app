import { API_KEY } from '@env';

import client from '../client';
const language = '&language=es';
const apiKey = `&api_key=${API_KEY}`;

export const getPopularList = async (page: number) => {
  const pageNumber = `&page=${page}`;
  const popularUrl = `/discover/movie`;
  const query = `?include_adult=false&include_video=false&sort_by=popularity.desc`;
  const url = popularUrl + query + pageNumber + language + apiKey;

  return client
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
};

export const getBySearch = async (search: string, page: number) => {
  const pageNumber = `&page=${page}`;
  const searchUrl = `/search/movie`;
  const query = `?query=${search}`;
  const url = searchUrl + query + pageNumber + language + apiKey;

  return client
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
};
