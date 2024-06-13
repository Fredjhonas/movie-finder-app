import { FlatList } from 'native-base';
import React from 'react';
import { View } from 'react-native';

import { Movie } from '../api/types';
import MovieCard from './MovieCard';

type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props) => {
  return (
    <View style={{ flex: 1, paddingBottom: 20, paddingTop: 20 }}>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovieList;
