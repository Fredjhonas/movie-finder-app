import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'native-base';

import { Movie } from '../api/types';
import MovieCard from './MovieCard';

type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props) => {
  const navigation = useNavigation();

  const goToDetail = (movieId: string) => {
    console.log('🚀 ~ goToDetail ~ movieId:', movieId);
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
    />
  );
};

export default MovieList;
