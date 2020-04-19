import React from 'react';
import { List, ListItem, Icon, Text, Left, Body, Right, Button, Item, Input } from 'native-base';
import { ScrollView } from 'react-native';
import { Center } from '../../Components/Center';

export default (...props) => {
    console.log("Salary Break Ups", props);
    console.log(props.Object," is the screen prop")
    return (
        <ScrollView>
            <List>
                <Item>
                    <Input
                        placeholder="Search employee"
                    />
                    <Icon active name="ios-search" />
                </Item>
                <ListItem thumbnail >

                    <Left>
                        <Icon active name='md-home' />
                    </Left>
                    <Body>
                        <Text>EmpName</Text>
                        <Text note numberOfLines={1}>Company ID :</Text>
                        <Text note numberOfLines={1}>Company ID :</Text>
                        <Text note numberOfLines={1}>Company ID :</Text>
                        <Text note numberOfLines={1}>Company ID :</Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                        >
                            <Text>View</Text>
                        </Button>
                    </Right>
                </ListItem>
            </List>
        </ScrollView>
    )
}
