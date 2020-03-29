import React, { Component } from 'react';
import { StyleSheet, View, Button, Platform, Text } from 'react-native';
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            TextHolder: 'This is Old Sample Text'
        }
    }

    ChangeTextFunction = () => {
        this.setState({
            TextHolder: "This is New Text."
        })
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ marginBottom: 20, fontSize: 20 }}> {this.state.TextHolder} </Text>
                <Button title="Change Text Component Text" onPress={this.ChangeTextFunction} />
            </View>
        );
    }
}


const styles = StyleSheet.create(
    {
        MainContainer:
        {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginTop: (Platform.OS) === 'ios' ? 20 : 0
        }
    });
