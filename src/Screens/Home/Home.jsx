import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Button, StyleSheet, AsyncStorage, Image, Picker } from 'react-native';
import { Center } from '../../Components/Center';
import Company from './Component/Company';

const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/master';

export default () => {

    const [loading, setLoading] = useState(true);
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let loginTokenString = await AsyncStorage.getItem("user");
            let loginData = JSON.parse(loginTokenString);
            await fetch(baseURL, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'token': loginData.loginToken
                },
                method: 'POST'
            })
                .then(response => response.json())
                .then(async (data) => {
                    await setLoading(false);
                    await setCompanyData(data);
                }).catch(() => {
                    setLoading(false);
                });
        }
        fetchData();
    }, []);

    if (loading || companyData == null) {
        return (<Center>
            {/* <Text>LOADING...</Text> */}
            <Image source={require('../../../assets/31.gif')} />
        </Center>)
    } else {
        return (
            <ScrollView style={styles.Container}>
                <Center>
                    <Text>
                        Home
                    </Text>
                </Center>

                <Company company={companyData} />
                {/* -------------------------------------------------------------------------------------------------------------- */}
                {/* <Text> Please select an item </Text>
                <Picker
                    selectedValue={this.state.choice}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ choice: itemValue })
                    }>
                    <Picker.Item label="PETER" value="PETER" />
                    <Picker.Item label="JOHN" value="JOHN" />
                </Picker>
                <Text>{this.state.choice}</Text>

                <Select placeholder="Please select..." >
                    {companyData.countryList.map((country, index) => {
                        return <Option key={index} value={country.countryId} name={country.countryCode}>{country.countryCode}</Option>
                    })}
                </Select> */}
                {/* -------------------------------------------------------------------------------------------------------------- */}
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