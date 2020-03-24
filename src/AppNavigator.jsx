import React, { useContext } from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import Home from './Screens/Home/Home';
import Settings from './Screens/Settings/Settings';
import companyList from './Screens/companyList/companyList';

import { AuthContext } from "./Context/AuthProvider";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { logout } = useContext(AuthContext);
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => logout()}
                labelStyle={{
                    color:'blue',
                    fontWeight:'bold'
                }}
            />
        </DrawerContentScrollView>
    );
}

export const AppNavigator = ({ }) => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="companyList" component={companyList} />
        </Drawer.Navigator>
    );
};