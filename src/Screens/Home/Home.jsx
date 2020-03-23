import React, { useContext, useState, useEffect } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { Drawer } from 'native-base';
import { Center } from '../../Components/Center';
import { AuthContext } from "../../Context/AuthProvider";
const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/master';

export default () => {
    const { logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(baseURL, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'token': '57Cz0gQ7tnq9jMTIW4WxlMPp4dxfA44ONRQTRo9G4Ok='
            },
            method: 'POST'
        })
            .then(response => response.json())
            .then((data) => {
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (<Center>
            <Text>LOADING</Text>
        </Center>)
    }

    return (
        <ScrollView>
            <Center>
                <Text>Hello</Text>
                <Button onPress={() => logout()} title="Logout"></Button>
            </Center>
            <Text>Display data!</Text>
            {/**<FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                    <Text>
                        {`${item.companyStatusList.companyStatusId}`}
                    </Text>
                }
            />**/}
        </ScrollView>

    )
}