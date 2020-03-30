import React, { Component } from './node_modules/react';
import { StyleSheet, View, Button, Platform, Text, ImageBackground, Image, ScrollView } from './node_modules/react-native';
import { Thumbnail, Card, CardItem, Left, Body, Content, Container } from 'native-base';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            TextHolder: 'This is Old Sample Text'
        }
    }

    ChangeTextFunction = () => {
        this.setState({
            TextHolder: "This is New Text."
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={{ padding: 5, flexBasis: '30%' }}>     
                    <ImageBackground
                        source={require('../../Static/images/BgcmpnyList.png')}
                        style={{ width: undefined, paddingTop: 48, padding: 16 }}>

                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            marginTop: -25,
                        }}>Companies</Text>
                        <View style={{ alignItems: 'center', height: '20%' }}>
                            <Image
                                source={require('../../Static/images/companyList.png')}
                                style={{ width: 80, height: 80, borderRadius: 140 / 2, marginStart: '-60%' }}
                            />
                        </View>
                    </ImageBackground>
                    <Container style={styles.container}>
                        <Content style={{ padding: 5 }}>
                            <Card style={styles.card1}>
                                <CardItem>
                                    <Body>
                                        <Text>Cost sheet</Text>
                                        <Text>cost</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={styles.card2}>
                                <CardItem>
                                    <Body>
                                        <Text>Cost sheet</Text>
                                        <Text>cost</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={styles.card3}>
                                <CardItem>
                                    <Body>
                                        <Text>Cost sheet</Text>
                                        <Text>cost</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={styles.card4}>
                                <CardItem>
                                    <Body>
                                        <Text>Cost sheet</Text>
                                        <Text>cost</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={styles.card5}>
                                <CardItem>
                                    <Body>
                                        <Text>Cost sheet</Text>
                                        <Text>cost</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={styles.card6}>
                                <CardItem>
                                    <Body>
                                        <Text>Cost sheet</Text>
                                        <Text>cost</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </View>
            </ScrollView> 
        );
    }
}


const styles = StyleSheet.create(
    {
        // MainContainer:
        // {
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     flex: 1,
        //     marginTop: (Platform.OS) === 'ios' ? 20 : 0
        // }

        container: {
            // height:800,
            overflow: 'hidden',
            flexWrap: 'wrap',
            flexDirection: 'row',
            // flexBasis:'30%',
            flexDirection: 'row',

        },
        card1: {
            position: 'relative',
            width: 160,
            height: 100,

        },
        card2: {
            position: 'absolute',
            width: 160,
            height: 100,
            marginLeft: 180,
            alignContent: 'stretch',
        },
        card3: {
            position: 'relative',
            width: 160,
            height: 100,
        },
        card4: {
            position: 'relative',
            width: 160,
            height: 100,
            marginLeft: 180,
            marginTop: -105,

        },
        card5: {
            position: 'relative',
            width: 160,
            height: 100,
        },
        card6: {
            position: 'absolute',
            width: 160,
            height: 100,
            marginLeft: 180,
            marginTop: 225,
        },
    });
