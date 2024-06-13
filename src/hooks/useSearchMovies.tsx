import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getBySearch } from '../api/requests/movie';
import { Movie } from '../api/types';

export const useSearchMovies = (search: string) => {
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
    queryKey: ['searchMovies'],
    queryFn: ({ pageParam = 1 }) => getBySearch(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length > 0 ? allPages.length + 1 : undefined;
      return nextPage;
    },
    enabled: search?.length > 0,
  });

  useEffect(() => {
    if (data) {
      const newMovies = data.pages.map((page) => page.results).flat();
      setMovies(newMovies);
    }
  }, [data, search]);

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
