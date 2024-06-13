import { Box, Center, Heading } from 'native-base';

const HomeScreen = () => {
  return (
    <Center flex={1}>
      <Box bg="brand.800" p={4} rounded="md">
        <Heading size="md" color="white">
          Welcome to NativeBase
        </Heading>
      </Box>
    </Center>
  );
};
export default HomeScreen;
