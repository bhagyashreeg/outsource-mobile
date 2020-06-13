import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from "../Screens/Accounts/Accounts";

const Stack = createStackNavigator();

const AccountsStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{ title: "Accounts" }}
      />
    </Stack.Navigator>
  );
};

export default AccountsStack;
