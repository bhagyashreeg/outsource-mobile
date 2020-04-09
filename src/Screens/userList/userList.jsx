import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AsyncStorage, Image } from 'react-native';
import { Container, Icon, Header, Button, Item, Input, Text, Title, Content } from 'native-base';
import { Center } from '../../Components/Center';
import Users from './Component/List';


const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/employee-list/redeem';

export default () => {

    const [loading, setLoading] = useState(true);
    const [usersData, setUsersData] = useState(null);

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
                    await setUsersData(data);
                }).catch(() => {
                    setLoading(false);
                });
        }
        fetchData();
    }, []);

    if (loading || usersData == null) {
        return (<Center>
            <Image source={require('../../../assets/loadingGif.gif')} />
        </Center>)
    } else {
        return (
            <Container>
                <Header searchBar rounded>
                    <Title>
                        Users List
                    </Title>
                </Header>
                <Content>
                    {/* <Item>
                        <Input placeholder="Search" />
                        <Icon active name="ios-search" />
                    </Item> */}
                    <Users user={usersData} />
                </Content>
            </Container>
        )
    }
}