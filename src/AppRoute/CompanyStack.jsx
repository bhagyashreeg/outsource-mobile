
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import CompanyList from '../Screens/companyList/CompanyList';
import CompanyDetails from '../Screens/CompanyDetails/CompanyDetails';

// import CompanyDetailaTabNavigation from '../Screens/CompanyTabNavigation/CompanyDetailaTabNavigation';

const Stack = createStackNavigator();

const CompanyStack = ({ }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CompanyList" component={CompanyList} />
            <Stack.Screen name="CompanyDetails" component={CompanyDetails}  options={{ title: 'Company Details' }} />
            {/* <Stack.Screen name="CompanyDetailaTabNavigation" component={CompanyDetailaTabNavigation} /> */}
        </Stack.Navigator>
    );
};

export default CompanyStack;