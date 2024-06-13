import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heading, useTheme, View } from 'native-base';

import SearchButton from '../../components/SearchButton';
import { useSearchbar } from '../../hooks/useSearchbar';
import DetailScreen from '../../screens/detail';
import HomeScreen from '../../screens/home';

const MainStack = createNativeStackNavigator();

const HeaderTitle = () => {
  return (
    <View flexDirection="row" flex={1}>
      <Heading color="white" fontSize="xl" fontWeight="bold">
        Movie Finder
      </Heading>
    </View>
  );
};

export default function MainNavigator() {
  const { isOpen, openSearchbar, closeSearchbar } = useSearchbar();
  const theme = useTheme();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderTitle />,
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: theme.colors.primary[800] },
          headerRight: () => (
            <SearchButton
              openSearchbar={openSearchbar}
              closeSearchbar={closeSearchbar}
              isOpenSearchbar={isOpen}
            />
          ),
        }}
      />
      <MainStack.Screen
        name="Detail"
        component={DetailScreen as never}
        options={{
          headerTitle: () => <HeaderTitle />,
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: theme.colors.primary[800] },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      />
    </MainStack.Navigator>
  );
}
