import React, { createContext, useContext, useState } from 'react';

type SearchbarContextData = ReturnType<typeof useSearchbarProvider>;

const SearchbarContext = createContext<SearchbarContextData>({} as SearchbarContextData);

export function SearchbarProvider({ children }: React.PropsWithChildren<unknown>) {
  const searchbar = useSearchbarProvider();

  return <SearchbarContext.Provider value={searchbar}>{children}</SearchbarContext.Provider>;
}

export const useSearchbar = () => useContext(SearchbarContext);

function useSearchbarProvider() {
  const [isOpen, setIsOpen] = useState(false);

  const openSearchbar = () => setIsOpen(true);
  const closeSearchbar = () => setIsOpen(false);

  return {
    isOpen,
    openSearchbar,
    closeSearchbar,
  };
}
