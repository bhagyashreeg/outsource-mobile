import React, { useContext } from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Image } from 'react-native';


import Home from './Screens/Home/Home';
import Settings from './Screens/Settings/Settings';
import companyList from './Screens/CompanyList/companyList';

import { AuthContext } from "./Context/AuthProvider";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { logout } = useContext(AuthContext);
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label={() => {
                return <Image
                    style={{ width: 100, height: 50 }}
                    source={require('./Static/images/nms-logo.png')}
                />
            }} style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center'
            }} />
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => logout()}
                labelStyle={{
                    color: '#D9D273',
                    fontWeight: 'bold'
                }}
            />
        </DrawerContentScrollView>
    );
}

export const AppNavigator = ({ }) => {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: '#244030'
            }}
            drawerContentOptions={{
                activeTintColor: '#407344',
                labelStyle: {
                    color: '#D9D273',
                    fontWeight: 'bold'
                }
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="CompanyList" component={companyList} />
        </Drawer.Navigator>

    );
};