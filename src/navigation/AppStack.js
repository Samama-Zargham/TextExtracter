import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav/TabNav';
import { COLORS } from '../Utils/AppStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Redux/reducers';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { UpdateDoc } from '../Firebase/Updatedoc';




const Stack = createStackNavigator();

const AppStack = () => {
  let dispatch = useDispatch();
  const usersDatas = useSelector(state => state.users.userData);

  React.useEffect(() => {
    firestore()
      .collection("Users")
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          let data = documentSnapshot.data();
          let newDate = new Date().getDate();
          dispatch(userData(data))
          if (data?.Date != newDate.toString()) {
            console.log("data?.Date==>> ", data?.Date)
            setTimeout(() => {
              UpdateDoc("coins", (parseInt(data?.coins) + 5), () => {
                dispatch(userData({ ...usersDatas, coins: parseInt(data?.coins) + 5 }))
              })
            }, 600);

          }
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


