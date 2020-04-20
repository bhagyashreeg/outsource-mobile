
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import CompanyList from '../Screens/companyList/CompanyList';
import CompanyDetails from '../Screens/CompanyDetails/CompanyDetails';

const Stack = createStackNavigator();

const CompanyStack = ({ }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CompanyList" component={CompanyList} />
            <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
        </Stack.Navigator>
    );
};

export default CompanyStack;