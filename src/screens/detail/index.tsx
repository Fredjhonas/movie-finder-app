import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Spinner,
  Text,
  View,
} from 'native-base';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { useDetailMovie } from '../../hooks/useDetailMovie';
import { DetailScreenProps } from '../../navigation/types';

const DetailScreen = ({ route }: DetailScreenProps) => {
  const { movieId } = route.params;
  const { movie, isFetching, isError, refetch } = useDetailMovie(movieId);

  const screenWidth = Dimensions.get('screen').width;

  const genres = movie?.genres?.map((genre) => genre.name).join(', ');

  useEffect(() => {
    if (movieId) {
      refetch();
    }
  }, [movieId]);
  return (
    <ScrollView>
      <Center flex={1} alignItems="center" p={2}>
        {isFetching && <Spinner m={4} />}
        {isError ? (
          <Center flex={1}>
            <Text fontSize="lg" color="red.500">
              Ha ocurrido un error al cargar las películas
            </Text>
          </Center>
        ) : null}

        {movie ? (
          <Center flex={1} justifyContent="flex-start">
            <Box
              mt={6}
              mb={6}
              borderRadius="xl"
              borderColor="primary.400"
              borderStyle="dotted"
              borderWidth={2}
              p={4}
            >
              <Heading size="lg" textAlign="center" color="primary.700">
                {movie.title}
              </Heading>
            </Box>
            <AspectRatio ratio={0.8} w={screenWidth} h={400}>
              <Box w="100%" h="100%">
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                  alt={movie.title}
                  w={screenWidth}
                  h={400}
                />
              </Box>
            </AspectRatio>

            <Box
              mt={6}
              borderRadius="xl"
              borderColor="primary.400"
              borderStyle="dotted"
              borderWidth={2}
              p={4}
              w="85%"
            >
              <Heading size="md" textAlign="center" color="primary.700">
                Sinopsis
              </Heading>
              <Text textAlign="center">{movie.overview}</Text>
            </Box>

            <Box mt={2} p={4} w="85%">
              <Heading size="md" textAlign="center" color="primary.700">
                Género
              </Heading>
              <Text textAlign="center">{genres}</Text>

              <Box p={4} w="85%" flex={1} flexDirection="row" justifyContent="space-between">
                <View>
                  <Heading size="md" textAlign="center" color="primary.700">
                    Popularidad
                  </Heading>
                  <Text textAlign="center">{movie.popularity}</Text>
                </View>
                <View>
                  <Heading size="md" textAlign="center" color="primary.700">
                    Votos
                  </Heading>
                  <Text textAlign="center">{movie.vote_count}</Text>
                </View>
              </Box>

              <Heading size="md" textAlign="center" color="primary.700">
                Fecha de lanzamiento
              </Heading>
              <Text textAlign="center">{new Date(movie.release_date).toLocaleDateString()}</Text>
            </Box>
          </Center>
        ) : null}
      </Center>
    </ScrollView>
  );
};

export default DetailScreen;
