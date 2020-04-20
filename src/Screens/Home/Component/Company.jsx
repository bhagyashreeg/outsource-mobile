
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { Card, CardItem, Body, Content, Container } from 'native-base';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default (props) => {

    let { countryList, companyStatusList } = props.company;

    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bgimg}
                    source={require('../../../Static/images/company-list-bg.png')}
                >

                    <Text style={styles.bgtext}>Companies</Text>
                    <View style={styles.bckground}>
                        <Image
                            source={require('../../../Static/images/nms-logo.png')}
                            style={styles.logo}
                        />

                    </View>

                    <Content style={styles.content}>

                        <Card style={styles.card} >
                            <Image
                                style={{
                                    flex: 1,
                                }}
                                source={require('../../../../assets/totalEmployees.jpg')}
                            />
                            <CardItem >
                                <Body>
                                    <Text>Total Employees</Text>
                                    <Text>859</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={{
                                    flex: 1,
                                }}
                                source={require('../../../../assets/companiesRegistered.jpg')}
                            />
                            <CardItem>
                                <Body>
                                    <Text>Companies Registered</Text>
                                    <Text>25</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={{
                                    flex: 1,
                                }}
                                source={require('../../../../assets/totalRevenue.jpg')}
                            />
                            <CardItem>
                                <Body>
                                    <Text>Total Revenue</Text>
                                    <Text>100000</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={{
                                    flex: 1,
                                }}
                                source={require('../../../../assets/totalRevenue.jpg')}
                            />
                            <CardItem>
                                <Body>
                                    <Text>Cost sheet</Text>
                                    <Text>cost</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={{
                                    flex: 1,
                                }}
                                source={require('../../../../assets/totalRevenue.jpg')}
                            />
                            <CardItem>
                                <Body>
                                    <Text>Cost sheet</Text>
                                    <Text>cost</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                style={{
                                    flex: 1,
                                }}
                                source={require('../../../../assets/totalRevenue.jpg')}
                            />
                            <CardItem>
                                <Body>
                                    <Text>Cost sheet</Text>
                                    <Text>cost</Text>
                                </Body>
                            </CardItem>
                        </Card>

                    </Content>

                </ImageBackground>
            </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    logo: {
        width: 30,
        height: 30,

        marginLeft: -300,
        marginTop: -20
    },
    content: {
        margin: 5
    },
    card: {
        padding: 10
    },
    bgimg: {
        paddingTop: 48,
        padding: 3,

    },
    bgtext: {
        textAlign: 'center',

        fontSize: 20,
        marginTop: -25,
        fontWeight: 'bold',

    },
    bckground: {
        alignItems: 'center',
        height: 20,
    }

});