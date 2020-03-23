import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home/Home';

const Drawer = createDrawerNavigator();

export const AppNavigator = ({ }) => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};