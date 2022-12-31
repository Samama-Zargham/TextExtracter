import React, { useEffect } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { useSelector } from 'react-redux';

const BaseStack = () => {

  return (
    <NavigationContainer>
      <RootStack />
      <FlashMessage position="top" />
    </NavigationContainer>

  );
};

const RootStack = () => {
  const user = useSelector(state => state.users.userData);
  // console.log("RootStack  ===>>>   ", user)

  if (user != null) {
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
};
export default BaseStack;
