import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './navigators/MainNavigator';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
