import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getPopularList } from '../api/requests/movie';
import { Movie } from '../api/types';

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['popularMovies'],
    queryFn: ({ pageParam = 1 }) => getPopularList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length > 0 ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (data) {
      const newMovies = data.pages.map((page) => page.results).flat();
      setMovies(newMovies);
    }
  }, [data]);

  return {
    movies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    refetch,
  };
};
