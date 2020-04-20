import React from 'react';
import { List, Icon, Item, Input } from 'native-base';
import { ScrollView } from 'react-native';
import { Center } from '../../Components/Center';
import {CardDetails} from './CardViewDetails';

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
                <CardDetails/>
            </List>
        </ScrollView>
    )
}
