import { Center, Text } from 'native-base';
import { useEffect, useState } from 'react';

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
    <Center>
      {isOpen ? <SearchBar search={search} onChange={setSearch} /> : null}
      {isFetching ? 'Cargando...' : null}
      {isError ? 'Error' : null}
      {movies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </Center>
  );
};
export default HomeScreen;
