import * as React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MonthlyReports from "./MonthlyReports";
import CompanyWiseReports from "./CompanyWiseReport";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Monthly Reports"
        component={MonthlyReports}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="briefcase" color={tintColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Company Wise Reports"
        component={CompanyWiseReports}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="school" color={tintColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default (props) => {
  return <MyTabs />;
};
