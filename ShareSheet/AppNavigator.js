
import React from "react"
import Account from './src/accountComponent/Account'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/homeComponent/Home";

const Stack = createStackNavigator ();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component ={Home}/>
                <Stack.Screen name="Account" component ={Account}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
