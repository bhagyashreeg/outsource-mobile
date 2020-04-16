
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Icon, Text, Left, Body, Right, Button, Item, Input } from 'native-base';

export default (props) => {
    console.log("props,", props);

    let { company: { companyList } } = props;

    let [companyListValuesFiltered, setCompanyListValuesFiltered] = useState(companyList);

    function searchUser(textToSearch) {
        setCompanyListValuesFiltered(companyList.filter(i => i.companyName.toLowerCase().includes(textToSearch.toLowerCase())))
        if (companyListValuesFiltered.length <= 0) {
            alert(textToSearch + " company doesnt exist")
        }
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
                    return <ListItem
                        thumbnail
                        key={index}
                    >
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
                                onPress={() => navigation.navigate('companyDetails')}
                            >
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                })}
            </List>
        </ScrollView>
    )
}