import { Center } from 'native-base';
import { useState } from 'react';

import SearchBar from '../../components/SearchBar';
import { useSearchbar } from '../../hooks/useSearchbar';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const { isOpen } = useSearchbar();
  return <Center>{isOpen ? <SearchBar search={search} onChange={setSearch} /> : null}</Center>;
};
export default HomeScreen;
