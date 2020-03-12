
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';


const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerTitle: () => <Text>OUTSOURCE</Text>
                
            }}> */}
            {/* <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator> */}

            <Stack.Navigator initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

