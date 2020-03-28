import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, ImageBackground, Image } from 'react-native';
import { Drawer, Container, Header, Content, Button, Text, Thumbnail,Card,CardItem,Left,Body, Right} from 'native-base';
import { Center } from '../../Components/Center';
import { AuthContext } from "../../Context/AuthProvider";
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
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
        <ScrollView >
            <ImageBackground
                source={require('../../Static/images/bgCompanyList.jpg')}
                style={{ width: undefined, padding: 16, paddingTop: 48 }}
            >


                <Center>
                    <Text style={styles.bigBlue}>Form to display company list</Text>
                </Center>
                {/* <Image 
                source={require('../../Static/images/companyList.png')} style={styles.companylist}
            /> */}


                <Text>Displaying Companies</Text>
                <View style={{ alignItems: 'center', height: '30%' }}>
                    <Image
                        source={require('../../Static/images/companyList.png')}
                        style={{ width: 80, height: 80, borderRadius: 140 / 2, marginTop: 10 }}
                    />
                    
        
                </View>
            </ImageBackground>

            {/* <Container> */}
            {/* <Header /> */}
            {/* <Content>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button style={styles.button} bordered info>

                        <Text style={styles.buttonText}>Info</Text>
                    </Button>
                    <Button style={styles.button} bordered info>
                        <Text>Info</Text>
                    </Button>
                    <Button style={styles.button} bordered info>
                        <Text>Info</Text>
                    </Button>
                    <Button style={styles.button} bordered info>
                        <Text>Info</Text>
                    </Button>
                </View>
            </Content> */}
            {/* </Container> */}




            {/* <Container> */}
        {/* <Header /> */}
        <Content>
          <Card style={styles.card}>
            <CardItem  >
            <Left style={styles.card2}>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text >CostSheet</Text>
                  <Text note>cost</Text>
                </Body>
                
              </Left>
              

              
            </CardItem>
            </Card >
            <Card style={styles.card1}>
            <CardItem>
            <Right>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text >CostSheet</Text>
                  <Text note>cost</Text>
                </Body>
                
              </Right>
              </CardItem>
            </Card>
            </Content>
            {/* </Container> */}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 5,
        marginTop: -25,
    },
    companylist: {
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        borderWidth: 3,
        borderColor: 'white',
    },
    // buttonText: {
    //     flex: 1,
    // },
    // button: {

    //     flexDirection: 'row',
    //     width: 80,
    //     justifyContent: 'space-evenly',
    //     marginTop: 50,

    // },
    card:{
        
        position:'relative',
        width:150,
        height:100,
        marginTop:50,
        justifyContent: 'space-around',
    },
    card1:{
        width:150,
        height:100,
        marginTop:50,
        justifyContent: 'space-around',
    },
    card2:{
        flex:1,
    }


});   