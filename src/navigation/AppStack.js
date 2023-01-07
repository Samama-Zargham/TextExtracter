import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav/TabNav';
import { COLORS } from '../Utils/AppStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/reducers';
import { GoogleSignin } from '@react-native-google-signin/google-signin';




const Stack = createStackNavigator();

const AppStack = () => {
  let dispatch = useDispatch();
  React.useEffect(() => {
    ConfigureGoogle()
    firestore()
      .collection("Users")
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          let data = documentSnapshot.data();
          console.log("first==>> ", data)
          dispatch(userData(data))

        }
      })
      .catch(error => {
        console.log('get user ', error);
      });
  }, [])

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

const ConfigureGoogle = () => {
  GoogleSignin.configure({
    webClientId: '919222476321-83s028fmuiem5q2bfdfhkgo3kj4rnqto.apps.googleusercontent.com',
  });
}
