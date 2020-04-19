
import React, { useContext } from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import {TabNavigator} from '@react-navigation/drawer'

import { Image, StyleSheet } from 'react-native';
import { Icon, Text, Left } from 'native-base';

import Home from './Screens/Home/Home';
import Settings from './Screens/Settings/Settings';
import CompanyStack from './AppRoute/CompanyStack';
import UserList from './Screens/UserList/UserList';
import BankAnnexure from './Screens/Accounts/BankAnnexure';

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
                label={() => {
                    return (
                        <Text>
                            <Text>

                            </Text>
                            <Text>
                                <Icon name={'md-power'}></Icon>
                                <Text style={styles.logoutText}>Logout</Text>
                            </Text>
                        </Text>
                    )
                }}
                // label="Logout"
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
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon: () => <Icon
                    size={23}
                    name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}></Icon>
            }} />
            <Drawer.Screen name="Company List" component={CompanyStack} options={{
                drawerIcon: () => <Icon name={'md-list'}></Icon>
            }} />
            <Drawer.Screen name="User List" component={UserList} options={{
                drawerIcon: () => <Icon name={'md-list'} ></Icon>
            }} />
            <Drawer.Screen name="Accounts" component={BankAnnexure} options={{
                drawerIcon: () => <Icon name={'md-calculator'}></Icon>
            }} />
            <Drawer.Screen name="Settings" component={Settings
            } options={{
                drawerIcon: () => <Icon name={'md-settings'}></Icon>
            }} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    logoutText: {
        fontSize: 14,
        color: "#D9D273",
        fontWeight: "bold",
        position: 'absolute',
    }
})