import React from 'react';
import { Center } from '../../Components/Center';
import {CardDetails} from './CardViewDetails';

export default (props) => {
    console.log("Cost SHeet props", props);
    return (
        <Center>
            <CardDetails/>
        </Center>
    )
}
