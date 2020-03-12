
import React, { useState, useEffect } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

import Login from './Screens/Login/Login';

const Stack = createStackNavigator();

export const Navigation = () => {
    let [isReady, setIsReady] = useState(false);
    useEffect(() => {
        async function fetchFont() {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });
            setIsReady(true);
        }
        fetchFont();
    }, []);

    if (!isReady) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login" screenOptions={{
                    headerTitle: () => null
                }}>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}