import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../UI/TabScreens/Profile';
import Home from '../../UI/TabScreens/Home';
import QuestionsExplanation from '../../UI/TabScreens/QuestionsExplanation';
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='QuestionsExplanation' component={QuestionsExplanation} />
            </Stack.Navigator>
        </>
    );
};
export default HomeStack;
