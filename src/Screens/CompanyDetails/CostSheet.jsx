import React from 'react';
import { Text, Button, View } from 'native-base';
import { Center } from '../../Components/Center';

export default (props) => {
    console.log("Cost SHeet props", props);
    return (
        <Center>
            <Text>
                Cost Sheet
            </Text>
        </Center>
    )
}
