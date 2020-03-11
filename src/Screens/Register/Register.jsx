import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default (props) => {
    let { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <Button title="Go to Login" onPress={() => {
                navigation.navigate("Login")
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