
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Picker, StatusBar, Dimensions } from 'react-native';
// import {Table} from 'react-native-table-component';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default (props) => {
    StatusBar.setHidden(true);
    StatusBar.setBackgroundColor = "#00BCD4";

    let { companyList, setcompanyList } = props.company;
    const head = [
        "\t\tSl No\t\t",
        "\tCompany Registration Name\t",
        "\tCompany Registration Number\t",
        "\tCompany Type\t",
        "\tContact Person\t",
        "\tContact Number\t",
        "\tContact Email\t",
        "\tCompany Address\t",
        "\tCompany Status\t",
        "\tPAN\t",
        "\tGST\t",
        "\tState\t",
        "\tPinCode\t",
        "\tStatus\t",
    ];
    let tableData = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        ['a', 'b', 'c', 'd', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2'],
        ['1', '2', '3', '4\n2', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2'],
        ['a', 'b', 'c', 'd', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2'],
    ];

    console.log("prps", props);
    console.log("Table datas", tableData);

    const getRowsData = function () {
        var items = props.company.companyList;
        console.log("poiuytrewasdfghjlnbvcxz",items)
        return items.map((row, index) => {
            return <Row key={index} data={row}  />
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
            <Text>	Statuss :-{props.company.companyList[0].isActive}</Text>
            <Text> USing map{'\n'}
                {props.company.companyList.map((item, key) => (
                    <Text>
                        {'\t\t'}key={key + '\n'}
                        {'\t\t\t\t' + item.companyStatusName + '\n'}
                        {'\t\t\t\t' + item.pinCode + '\n'}
                        {'\t\t\t\t' + item.companyName + '\n'}
                    </Text>)
                )}
            </Text>
            <Table borderStyle={styles.border} style={styles.table}>
                <Row
                    data={head}
                    style={styles.head}
                    textStyle={styles.text}
                />
                <Rows data={tableData} />{/* Displaying statistically   */}
                {/* {props.company.companyList.map((item, key) => ( */}
                    <Row
                        data={
                            getRowsData()
                        }
                        style={styles.dataRow}
                        textStyle={styles.text}
                    />
                {/* ))} */}
                {/* Just to check whether props is working here or not   */}
                {/* {props.company.companyList.map((item, key) => (
                    <Text>
                        {'\t\t'}key={key}
                        {'\t\t\t\t' + item.companyStatusName + '\t'}
                        {'\t\t\t\t' + item.pinCode + '\t'}
                        {'\t\t\t\t' + item.companyName + '\n'}
                    </Text>)
                )} */}
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