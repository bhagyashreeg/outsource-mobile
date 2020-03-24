import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home/Home';
import Settings from './Screens/Settings/Settings';
import companyList from './Screens/companyList/companyList';

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
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="companyList" component={companyList} />
        </Drawer.Navigator>
    );
};