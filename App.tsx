import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
const RootStack = createStackNavigator();

const Stack = () => {
  return (
    <RootStack.Navigator initialRouteName="home" screenOptions={{
      headerShown: false,
    }}>
      <RootStack.Screen name="home" component={HomeScreen} />
      <RootStack.Screen name="search" component={SearchScreen} />
    </RootStack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
}

export default App


