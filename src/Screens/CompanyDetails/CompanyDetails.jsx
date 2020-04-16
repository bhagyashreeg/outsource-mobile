import React from 'react';
import { Text } from 'native-base';
import { Center } from '../../Components/Center';


export default (props) => {
    console.log("company details props", props);
    return (
        <Center>
            <Text>
                Company Details based on current row item clicked
            </Text>
        </Center>
    )
}
