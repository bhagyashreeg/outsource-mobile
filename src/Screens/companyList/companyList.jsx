import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Button, StyleSheet, AsyncStorage, Image, TextInput } from 'react-native';
import { Icon, View } from 'native-base';
import { Center } from '../../Components/Center';
import Company from './Component/List';

const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/redeem';

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
                    // 'token': loginData.loginToken
                    'token': "GAnpMklBJmRu3bkltjYygPB/DsgpzZae+VnpfwBBQN0="
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
            <Image source={require('../../../assets/loadingGif.gif')} />
        </Center>)
    } else {
        return (
            <ScrollView >
                <View style={styles.searchBarContainer}>
                    {/* Search bar for searching the company details  */}
                    <TextInput
                        style={styles.inputStyle}
                        returnKeyType="search"
                        placeholder="Search text"
                    />
                    <Icon
                        name='bhagya ua supposed to put the search icon here'
                        color='#000'
                        size={14}
                    />
                </View>
                <Button
                    title="Search"
                    onPress={() => console.log('The button was pressed ')}
                />
                <Center>
                    <Text>
                        CompanyList
                    </Text>
                </Center>
                {/* displayng the comapnies list in a table */}
                <ScrollView horizontal={true}>
                    <Company company={companyData} />
                </ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 100,
    },
    inputStyle: {
        flex: 1,
    },
});