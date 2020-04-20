
import * as React from 'react';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SalaryBreakUps from './SalaryBreakUps';
import EmployeeList from './EmployeeList';
import Attendance from './Attendance';
import CostSheet from './CostSheet';

const Tab = createBottomTabNavigator();

function MyTabs(props) {
    console.log(JSON.stringify(props) + "data")
    return (
        <Tab.Navigator {...props}>
            <Tab.Screen 
                name="Salary Break Ups"
                component={SalaryBreakUps}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="flash" color={tintColor} size={25} />
                    )
                }} />
            <Tab.Screen
                name="Employee List"
                component={EmployeeList}
                screenProps={props}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="list-box" color={tintColor} size={25} />
                    )
                }} />
            <Tab.Screen 
                name="Attendance"
                component={Attendance}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="stats" color={tintColor} size={25} />
                    )
                }} />
            <Tab.Screen
                name="Cost Sheet"
                component={CostSheet}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="logo-twitch" color={tintColor} size={25} />
                    )
                }} />
        </Tab.Navigator >
    );
}

// const numColumns=2
export default (props) => {
    console.log("company details props.", props);
    alert(props.route.params.companyId + "  is the company ID selected")
    const companyId = props.route.params.companyId
    return (
        <MyTabs companyId={companyId} />
    );
}

