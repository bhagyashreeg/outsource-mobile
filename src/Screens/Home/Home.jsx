import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Button, StyleSheet } from 'react-native';
import { Center } from '../../Components/Center';
import Company from './Component/Company';
const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/master';

export default () => {

    const [loading, setLoading] = useState(true);
    const [companyData, setCompanyData] = useState({});

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
            .then(async (data) => {
                await setLoading(false);
                await setCompanyData(data);
                console.log(data.companyStatusList);
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

    if (companyData.countryList !== undefined) {
        return (
            <ScrollView style={styles.Container}>
                <Center>
                    <Text>Hello</Text>
                </Center>

                <Company company={companyData} />
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
    } else {
        return (<Center>
            <Text>LOADING</Text>
        </Center>)
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20,
    },
    Container: {
        margin: 30
    }
});
