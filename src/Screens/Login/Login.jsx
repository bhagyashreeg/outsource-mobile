import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default (props) => {
  let { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Go to Register" onPress={() => {
        navigation.navigate("Register")
      }}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});