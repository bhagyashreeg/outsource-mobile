
import React, { useState } from 'react';
import { ScrollView, Modal, StyleSheet, View } from 'react-native';
import { List, ListItem, Icon, Text, Left, Body, Right, Button, Item, Input } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

import userDetails from "./userDetails";


export default (props, { navigation }) => {
    const usersListValues = props.user.employeeList;
    let [userListValuesFiltered, setUserListValuesFiltered] = useState(props.user.employeeList);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([null]);
    const Stack = createStackNavigator();

    function searchUser(textToSearch) {
        setUserListValuesFiltered = props.user.employeeList.filter(i =>
            i.employeeFirstName.includes(textToSearch))
        alert(setUserListValuesFiltered)
    }

    return (
        <ScrollView>
            <Button
                onPress={() => navigation.navigate('userDetails')}
            ><Text>CLick</Text></Button>

            <Stack.Navigator>
                <Stack.Screen name="userDetails" component={userDetails} />
            </Stack.Navigator>

            <List>
                <Item>
                    <Input
                        placeholder="Search Users"
                        onChangeText={text => { searchUser(text) }}
                    />
                    <Icon active name="ios-search" />
                </Item>
                {userListValuesFiltered.map((row, index) => {
                    return <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                            <Text>{row.employeeFirstName + " " + row.employeeMiddleName + " " + row.employeeLastName}</Text>
                            <Text note numberOfLines={1}>Employee ID : {row.employeeId}</Text>
                        </Body>
                        <Right>
                            <Button
                                transparent
                                onPress={() => { setShow(true); setSelected(row); }}
                            >
                                <Text>View</Text>

                                <Modal transparent={true} visible={show}>
                                    <View style={styles.modalContainer}>
                                        <View style={styles.modalContainerInner}>
                                            <Text style={styles.modalTextHeader}>{selected.employeeFirstName + " " + selected.employeeMiddleName + " " + selected.employeeLastName}</Text>
                                            <Text style={styles.modalText}>Company Name : </Text>
                                            <Text style={styles.modalText}>Employee Name : {selected.employeeFirstName + " " + selected.employeeMiddleName + " " + selected.employeeLastName}</Text>
                                            <Text style={styles.modalText}>Mobile Number : {selected.employeeMobileNumber}</Text>
                                            <Text style={styles.modalText}>Email ID : {selected.employeeEmailId}</Text>
                                            <Text style={styles.modalText}>Salary : </Text>
                                            <Text style={styles.modalText}>Marital Status : {selected.maritalStatusName}</Text>
                                            <Text style={styles.modalText}>Status: {String(selected.isActive)}</Text>
                                            <Button onPress={() => setShow(false)}><Text>Close</Text></Button>
                                        </View>
                                    </View>
                                </Modal>
                            </Button>
                        </Right>
                    </ListItem>
                })}
            </List>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#000000aa",
        flex: 1
    },
    modalContainerInner: {
        backgroundColor: "#ffffff",
        margin: 20,
        padding: 20,
        borderRadius: 10,
        flex: 1
    },
    modalText: {
        fontSize: 14,
    },
    modalTextHeader: {
        fontSize: 40,
        alignItems: "stretch"
    }
});