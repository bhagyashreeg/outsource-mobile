import React from 'react';
import { Text, Button, View } from 'native-base';
import { Center } from '../../Components/Center';

export default (props) => {
    console.log("Employee List props", props);
    return (
        <Center>
            <Text>
                Employee Lists
            </Text>
        </Center>
    )
}
