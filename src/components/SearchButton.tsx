import { CloseIcon, IconButton, SearchIcon } from 'native-base';

type Props = {
  openSearchbar: () => void;
  closeSearchbar: () => void;
  isOpenSearchbar: boolean;
};

const SearchButton = ({ openSearchbar, closeSearchbar, isOpenSearchbar }: Props) => {
  return (
    <IconButton
      icon={isOpenSearchbar ? <CloseIcon /> : <SearchIcon />}
      color="white"
      _icon={{
        size: 'md',
        color: 'white',
      }}
      onPress={isOpenSearchbar ? closeSearchbar : openSearchbar}
    />
  );
};

export default SearchButton;
