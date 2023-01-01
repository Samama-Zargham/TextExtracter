import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, WindowHeight } from '../../Utils/AppStyles';
import Home from '../../UI/TabScreens/Home';
import Profile from '../../UI/TabScreens/Profile';
import AnyIcon, { Icons } from '../../components/Reusable/AnyIcon';


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.background }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            <AnyIcon
              disabled={true}
              type={Icons.Ionicons}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? COLORS.PRIMARY : COLORS.BLACK}
              size={25}
            />
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            <AnyIcon
              disabled={true}
              type={Icons.FontAwesome}
              name={focused ? 'user' : 'user-o'}
              color={focused ? COLORS.PRIMARY : COLORS.BLACK}
              size={25}
            />
        }}
      />

    </Tab.Navigator>
  );
}
