import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNavigationProp} from './type';
import Dashboard from '../screens/Dashboard';
import ManageCategoriesScreen from '../screens/ManageCategoriesScreen';

const Stack = createNativeStackNavigator<ScreenNavigationProp>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ManageCategoriesScreen"
          component={ManageCategoriesScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
