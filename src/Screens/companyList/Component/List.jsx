
import React, { useState } from 'react';
import { ScrollView, Modal, StyleSheet, View } from 'react-native';
import { List, ListItem, Icon, Text, Left, Body, Right, Button, Item, Input } from 'native-base';


export default (props) => {
    const companyListValues = props.company.companyList;
    let [companyListValuesFiltered, setCompanyListValuesFiltered] = useState(props.company.companyList);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([null]);

    function searchUser(textToSearch) {
        setCompanyListValuesFiltered = props.company.companyList.filter(i =>
            i.companyName.includes(textToSearch))
        alert(companyListValuesFiltered)
    }

    return (
        <ScrollView>
            <List>
                <Item>
                    <Input
                        placeholder="Search company"
                        onChangeText={text => { searchUser(text) }}
                    />
                    <Icon active name="ios-search" />
                </Item>
                {companyListValuesFiltered.map((row, index) => {
                    return <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                            <Text>{row.companyName}</Text>
                            <Text note numberOfLines={1}>Company ID : {row.companyId}</Text>
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
                                            <Text style={styles.modalTextHeader}>{selected.companyName}</Text>
                                            <Text style={styles.modalText}>Company ID : {selected.companyId}</Text>
                                            <Text style={styles.modalText}>Company Name : {selected.companyName}</Text>
                                            <Text style={styles.modalText}>Company Regd Number : {selected.companyRegistrationNumber}</Text>
                                            <Text style={styles.modalText}>Company Type : {selected.companyRegistrationNumber}</Text>
                                            <Text style={styles.modalText}>Contact Person : {selected.companyContactPerson}</Text>
                                            <Text style={styles.modalText}>Contact Number : {selected.companyContactNumber}</Text>
                                            <Text style={styles.modalText}>Contact Email : {selected.companyEmailId}</Text>
                                            <Text style={styles.modalText}>Company Address : {selected.companyAddress}</Text>
                                            <Text style={styles.modalText}>Company Status : {selected.companyStatusName}</Text>
                                            <Text style={styles.modalText}>PAN : {selected.companyPANNumber}</Text>
                                            <Text style={styles.modalText}>GST: {selected.companyGSTNumber}</Text>
                                            <Text style={styles.modalText}>Country: {selected.countryName}</Text>
                                            <Text style={styles.modalText}>State: {selected.stateName}</Text>
                                            <Text style={styles.modalText}>Pin Code: {selected.pinCode}</Text>
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
        </ScrollView >
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
        alignItems:"stretch"
    }
});

