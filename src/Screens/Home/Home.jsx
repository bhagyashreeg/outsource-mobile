import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Button, StyleSheet, AsyncStorage, Image} from 'react-native';
import { Icon} from 'native-base';
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
            <Text>LOADING...</Text>
            {/* <Image source={require('../../../assets/loadingGif.gif')} /> */}
        </Center>)
    } else {
        return (
            <ScrollView>
                <Center>
                    <Text>
                        Home
                    </Text>
                </Center>
                <Company company={companyData} />
                
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

});