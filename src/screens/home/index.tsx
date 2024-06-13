import { Center, Spinner, Text } from 'native-base';
import { useEffect, useState } from 'react';

import MovieList from '../../components/MovieList';
import SearchBar from '../../components/SearchBar';
import { useSearchbar } from '../../hooks/useSearchbar';
import { useSearchMovies } from '../../hooks/useSearchMovies';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const { movies, isError, isFetching, refetch } = useSearchMovies(search);

  const { isOpen } = useSearchbar();

  useEffect(() => {
    refetch();
  }, [search]);

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
    }
  }, [isOpen]);

  return (
    <Center alignItems="center" justifyContent="flex-start" flex={1}>
      {isOpen ? <SearchBar search={search} onChange={setSearch} /> : null}
      {isFetching ? <Spinner /> : null}
      {isError ? (
        <Center flex={1}>
          <Text fontSize="lg" color="red.500">
            Ha ocurrido un error al cargar las películas
          </Text>
        </Center>
      ) : null}
      {movies.length > 0 && <MovieList movies={movies} />}
    </Center>
  );
};
export default HomeScreen;
