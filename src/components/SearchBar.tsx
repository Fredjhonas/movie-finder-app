import { IconButton, Input, SearchIcon, SmallCloseIcon, VStack } from 'native-base';

type Props = {
  search: string;
  onChange: (text: string) => void;
};

const SearchBar = ({ search, onChange }: Props) => {
  return (
    <VStack space={2} width="100%" px="4" py="4">
      <Input
        size="lg"
        placeholder="Buscar películas..."
        variant="outline"
        width="100%"
        borderRadius="10"
        py="2"
        px="2"
        value={search}
        onChangeText={(text) => onChange(text)}
        InputLeftElement={<SearchIcon ml="2" size="5" color="primary.400" />}
        InputRightElement={
          search?.length > 0 ? (
            <IconButton
              icon={<SmallCloseIcon size="5" color="primary.400" />}
              colorScheme="primary"
              size="lg"
              variant="unstyled"
              onPress={() => onChange('')}
            />
          ) : (
            <></>
          )
        }
        testID="search-input"
      />
    </VStack>
  );
};

export default SearchBar;
