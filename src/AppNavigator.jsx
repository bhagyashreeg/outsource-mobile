import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './Screens/Home/Home';

const Tabs = createBottomTabNavigator();

export const AppNavigator = ({ }) => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
            }}
        >
            <Tabs.Screen name="Home" component={Home} />
        </Tabs.Navigator>
    );
};