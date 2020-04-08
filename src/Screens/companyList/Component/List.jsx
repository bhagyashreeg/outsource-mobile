
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


export default (props) => {

    console.log("props", props);

    const head = [
        "Sl No",
        "Company Registration Name",
        "Company Registration Number",
        "Company Type",
        "Contact Person",
        "Contact Number",
        "Contact Email",
        "Company Address",
        "Company Status",
        "PAN",
        "GST",
        "State",
        "PinCode",
        "Status",
    ];
    let tableData = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        ['a', 'b', 'c', 'd', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2'],
        ['1', '2', '3', '4\n2', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2'],
        ['a', 'b', 'c', 'd', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2'],
    ];

    const getRowsData = function () {
        var items = props.company.companyList;
        return items.map((row, index) => {
            return <Row key={index} data={row} />
        })
    }

    return (
        <View>
            <Text>Company Registration Name :-{props.company.companyList[0].companyName}</Text>
            <Text>	Company Registration Number :-{props.company.companyList[0].companyRegistrationNumber}</Text>
            <Text>	Company Type :-{props.company.companyList[0].companyTypeName}</Text>
            <Text>	Contact Person :-{props.company.companyList[0].companyContactPerson}</Text>
            <Text>	Contact Number :-{props.company.companyList[0].companyContactNumber}</Text>
            <Text>	Contact Email :-{props.company.companyList[0].companyEmailId}</Text>
            <Text>	Company Address :-{props.company.companyList[0].companyAddress}</Text>
            <Text>	Company Status :-{props.company.companyList[0].companyStatusName}</Text>
            <Text>	PAN :-{props.company.companyList[0].companyPANNumber}</Text>
            <Text>	GST :-{props.company.companyList[0].companyGSTNumber}</Text>
            <Text>	Country :-{props.company.companyList[0].countryName}</Text>
            <Text>	State :-{props.company.companyList[0].stateName}</Text>
            <Text>	Pin Code :-{props.company.companyList[0].pinCode}</Text>
            <Text>	Status :-{props.company.companyList[0].isActive}</Text>
            <Table borderStyle={styles.border} style={styles.table}>
                <Row
                    data={head}
                    style={styles.head}
                    textStyle={styles.text}
                />
                <Rows data={getRowsData}  />                                                                                                                                                                                                                                                                                                                                                                                    
            </Table>
        </View>  
    )
}
const styles = StyleSheet.create({
    text: { textAlign: "center" },
    head: { height: 40, backgroundColor: "#f1f8ff" },
    dataRow: { height: 30 },
    border: { borderWidth: 0.5, borderColor: "#c8e1ff" },
    table: { marginTop: 10, marginBottom: 10 }
});