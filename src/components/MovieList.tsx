import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'native-base';
import { RefreshControl } from 'react-native';

import { Movie } from '../api/types';
import MovieCard from './MovieCard';

type Props = {
  movies: Movie[];
  refreshMovies: () => void;
};

const MovieList = ({ movies, refreshMovies }: Props) => {
  const navigation = useNavigation();

  const goToDetail = (movieId: string) => {
    navigation.navigate({
      name: 'Detail',
      params: { movieId },
    } as never);
  };

  return (
    <FlatList
      numColumns={2}
      data={movies}
      renderItem={({ item }) => <MovieCard movie={item} goToDetail={goToDetail} />}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={<RefreshControl refreshing={false} onRefresh={refreshMovies} />}
    />
  );
};

export default MovieList;
