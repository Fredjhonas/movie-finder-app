import { Box, Center, Image } from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';

import { Movie } from '../api/types';

type Props = {
  movie: Movie;
};

const screenWidth = Dimensions.get('screen').width;

const MovieCard = ({ movie }: Props) => {
  return (
    <TouchableOpacity>
      <Box borderRadius="xl" borderColor="primary.400" borderStyle="dotted" borderWidth={2} m={1}>
        {movie.poster_path ? (
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            alt={movie.title}
            w={screenWidth / 2 - 35}
            h={180}
            borderRadius={10}
          />
        ) : (
          <Box bg="warmGray.200" borderRadius={10} w={screenWidth / 2 - 35} h={180}>
            <Center flex={1}>No Image</Center>
          </Box>
        )}
        <Center
          bg="primary.600"
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom="2"
          px="3"
          py="1.5"
        >
          {movie.title}
        </Center>
      </Box>
    </TouchableOpacity>
  );
};

export default MovieCard;
