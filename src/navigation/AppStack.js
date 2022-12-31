import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav/TabNav';
import { COLORS } from '../Utils/AppStyles';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </>
  );
};
export default AppStack;
