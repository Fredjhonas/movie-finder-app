import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home';

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
}
