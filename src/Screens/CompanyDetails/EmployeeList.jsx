import React from 'react';
import { Center } from '../../Components/Center';
import {CardDetails} from './CardViewDetails';

export default (props) => {
    console.log("Employee List props", props);
    return (
        <Center>
            <CardDetails />
        </Center>
        
    )
}
