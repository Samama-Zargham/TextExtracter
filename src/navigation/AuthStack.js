import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../Utils/AppStyles';
import SignIn from '../UI/AuthScreens/SignIn';
import SignUp from '../UI/AuthScreens/SignUp';
import Forgetpassword from '../UI/AuthScreens/Forgetpassword';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
