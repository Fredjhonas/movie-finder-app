import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getDetail } from '../api/requests/movie';
import { Movie } from '../api/types';

export const useDetailMovie = (id: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const { data, isError, isFetching, refetch } = useQuery({
    queryKey: ['detailMovie', id],
    queryFn: () => getDetail(id),
    enabled: id?.length > 0,
  });

  useEffect(() => {
    if (data) {
      console.log('🚀 ~ useEffect ~ data:', data);
      setMovie(data);
    }
  }, [data]);

  return {
    movie,
    isError,
    isFetching,
    refetch,
  };
};
