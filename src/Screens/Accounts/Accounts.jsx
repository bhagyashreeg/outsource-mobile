import * as React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BankAnnexure from "./BankAnnexure";
import CompanyWisePayment from "./CompanyWisePayment";
import EmployeePayments from "./EmployeePayments";
import TaxAndGst from "./TaxAndGst";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Bank Annexure"
        component={BankAnnexure}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="wallet" color={tintColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Company Wise Payment"
        component={CompanyWisePayment}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="school" color={tintColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Employee Payments"
        component={EmployeePayments}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="briefcase" color={tintColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Tax And Gst"
        component={TaxAndGst}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="analytics" color={tintColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default (props) => {
  //   console.log("company details props.", props);
  //   alert("This is the Accounts Tab selected");

  return <MyTabs />;
};
