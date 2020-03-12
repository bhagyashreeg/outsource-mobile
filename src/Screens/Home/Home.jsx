import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { Center } from '../../Components/Center';
import { AuthContext } from "../../Context/AuthProvider";


export default () => {
    const { logout } = useContext(AuthContext);
    return (
        <Center>
            <Text>Hello</Text>
            <Button onPress={() => logout()} title="Logout"></Button>
        </Center>
    )
}