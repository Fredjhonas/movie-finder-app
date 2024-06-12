import React, {useEffect} from 'react';
import AppNavigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigation />;
};

export default App;
