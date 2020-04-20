import React from 'react';
import { Center } from '../../Components/Center';
import {CardDetails} from './CardViewDetails';

export default (props) => {
    console.log("Attendance props", props);
    console.log(props.companyId)
    return (
        <Center>
            <CardDetails/>
        </Center> 
    )
}
