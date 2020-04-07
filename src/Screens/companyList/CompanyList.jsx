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
            <Image source={require('../../../assets/loadingGif.gif')} />
        </Center>)
    } else {
        return (
            <ScrollView >
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        returnKeyType="search"
                        placeholder="Search text"
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