
import React, { useState, useEffect } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/Login/Login';
import companyDetails from '../src/Screens/CompanyList/Component/CompanyDetails';
import CompanyList from './Screens/CompanyList/CompanyList';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
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
        <Stack.Navigator
            initialRouteName="Login" screenOptions={{
                headerTitle: () => null
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="companyDetails" component={companyDetails} />
            <Stack.Screen name="CompanyList" component={CompanyList} />
        </Stack.Navigator>
    )
}