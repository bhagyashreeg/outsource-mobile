
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default (props) => {
    return (
        <ScrollView>
            <List>
                {props.company.companyList.map((row, index) => {
                    return <ListItem thumbnail key={index}>
                        <Left>
                            <Thumbnail circle source={{ uri: 'Image URL' }} />
                        </Left>
                        <Body>
                            <Text>{row.companyName}</Text>
                            <Text note numberOfLines={1}>Company ID : {row.companyId}</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                })}
            </List>
        </ScrollView>
    )
}
