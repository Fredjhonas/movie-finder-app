import { FlatList } from 'native-base';

import { Movie } from '../api/types';
import MovieCard from './MovieCard';

type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props) => {
  return (
    <FlatList
      numColumns={2}
      data={movies}
      renderItem={({ item }) => <MovieCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MovieList;
