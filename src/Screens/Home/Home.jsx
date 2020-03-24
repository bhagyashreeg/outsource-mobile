import React, { useContext, useState, useEffect } from 'react';
import { Text, ScrollView, Button, StyleSheet } from 'react-native';
import { Drawer, Container } from 'native-base';
import { Center } from '../../Components/Center';
import { AuthContext } from "../../Context/AuthProvider";
const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/master';

export default () => {
    const { logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

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
            .then(data => setData(data))
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
    function getVal() {
        return (<Text>Display data!</Text>)
    }


    return (
        <ScrollView style={styles.Container}>
            <Center>
                <Text>Hello</Text>
                <Button onPress={() => logout()} title="Logout"></Button>
            </Center>
            <Center>
                <Text>Hello</Text>
                <Text onPress={() => getVal()}>pppp</Text>
            </Center>
            <Text>Display data!</Text>
            {/* <Text>The country code is!            {data.countryList[0].countryCode}</Text>
            <Text>The country ID is!              {data.countryList[0].countryId}</Text>
            <Text>The country name is!            {data.countryList[0].countryName}</Text>
            <Text>The company status ID is!       {data.companyStatusList[0].companyStatusId}</Text>
            <Text>The company status name is 1!   {data.companyStatusList[0].companyStatusName}</Text>
            <Text>The company status name is 2!   {data.companyStatusList[1].companyStatusName}</Text>
            <Text>The company status name is 3!   {data.companyStatusList[2].companyStatusName}</Text>
            <Text>The company status name is 4!   {data.companyStatusList[3].companyStatusName}</Text> */}

            {/* <Text>Display data!{data.companyStatusList[0]}</Text> */}
            {/* <FlatList
                data={data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                    <Text>
                        {`${item.companyStatusList.companyStatusName}`}
                    </Text>
                }
            /> */}
            {/* <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={data.indexOf(companyStatusList)}
            /> */}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20,
    },
    Container:{
        margin:30
    }
});