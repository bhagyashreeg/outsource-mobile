import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Reports from "../Screens/Reports/Reports";

const Stack = createStackNavigator();

const ReportsStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{ title: "Reports" }}
      />
    </Stack.Navigator>
  );
};

export default ReportsStack;
