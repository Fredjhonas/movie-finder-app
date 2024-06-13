import { QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import queryClient from './src/api/queryClient';
import AppNavigation from './src/navigation';
import theme from './src/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <AppNavigation />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
