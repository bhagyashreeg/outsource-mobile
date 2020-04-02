
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Card, CardItem, Body, Content, Container } from 'native-base';

export default (props) => {

    let { countryList, companyStatusList } = props.company;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../Static/images/company-list-bg.png')}
                style={{ paddingTop: 48, padding: 16 }}>

                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: -25,
                }}>Companies</Text>
                <View style={{ alignItems: 'center', height: 300 }}>
                    <Image
                        source={require('../../../Static/images/company-list-icon.png')}
                        style={styles.logo}
                    />
                    {/* <View>
                        <Text>The country code is!            {countryList[0].countryCode}</Text>
                        <Text>The country ID is!              {countryList[0].countryId}</Text>
                        <Text>The country name is!            {countryList[0].countryName}</Text>
                        <Text>The company status ID is!       {companyStatusList[0].companyStatusId}</Text>
                        <Text>The company status name is 1!   {companyStatusList[0].companyStatusName}</Text>
                        <Text>The company status name is 2!   {companyStatusList[1].companyStatusName}</Text>
                        <Text>The company status name is 3!   {companyStatusList[2].companyStatusName}</Text>
                        <Text>The company status name is 4!   {companyStatusList[3].companyStatusName}</Text>
                    </View> */}
                </View>
            </ImageBackground>
            <Container>
                <Content style={styles.content}>
                    <Card style={styles.card} >
                        <Image
                            style={{
                                flex: 1,
                                // resizeMode,
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
                                // resizeMode,
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
                                // resizeMode,
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
                        <CardItem>
                            <Body>
                                <Text>Cost sheet</Text>
                                <Text>cost</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem>
                            <Body>
                                <Text>Cost sheet</Text>
                                <Text>cost</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
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
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    content: {
        margin: 10
    },
    card: {
        padding: 10
    }
});
