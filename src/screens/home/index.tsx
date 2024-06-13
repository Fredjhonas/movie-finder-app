import { Box, Center, Heading, Spinner, Text } from 'native-base';
import { useEffect, useState } from 'react';

import MovieList from '../../components/MovieList';
import SearchBar from '../../components/SearchBar';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { useSearchbar } from '../../hooks/useSearchbar';
import { useSearchMovies } from '../../hooks/useSearchMovies';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const searchMovies = useSearchMovies(search);
  const popularMovies = usePopularMovies();

  const { isOpen } = useSearchbar();

  const isError = searchMovies.isError || popularMovies.isError;
  const isFetching = searchMovies.isFetching || popularMovies.isFetching;
  const hasSearchResults = searchMovies.movies.length > 0;
  const movies = hasSearchResults ? searchMovies.movies : popularMovies.movies;

  useEffect(() => {
    searchMovies.refetch();
  }, [search]);

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
    }
  }, [isOpen]);

  return (
    <Center alignItems="center" justifyContent="flex-start" flex={1}>
      {isError ? (
        <Center flex={1}>
          <Text fontSize="lg" color="red.500">
            Ha ocurrido un error al cargar las películas
          </Text>
        </Center>
      ) : null}
      <Center style={{ flex: 1, padding: 20, width: '100%' }} alignItems="center">
        {isOpen ? <SearchBar search={search} onChange={setSearch} /> : null}
        {isFetching ? <Spinner m={4} /> : null}
        <Box
          m={4}
          borderRadius="xl"
          borderColor="primary.400"
          borderStyle="dotted"
          borderWidth={2}
          p={4}
          w="100%"
        >
          <Heading size="md" textAlign="center" color="primary.700">
            {hasSearchResults ? 'Resultados de la búsqueda' : 'Películas populares'}
          </Heading>
        </Box>
        {movies.length > 0 && <MovieList movies={movies} />}
      </Center>
    </Center>
  );
};
export default HomeScreen;
