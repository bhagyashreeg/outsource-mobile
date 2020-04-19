import React from 'react';
import { Text, Button, View } from 'native-base';
import { Center } from '../../Components/Center';

export default (props) => {
    console.log("Attendance props", props);
    console.log(props.companyId)
    return (
        <Center>
            <Text>
                Attendance Shown
            </Text>
        </Center>
    )
}
