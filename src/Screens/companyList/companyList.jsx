// import React, { Component } from 'react';
// import { StyleSheet, View, Button, Platform, Text } from 'react-native';
// export default class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             TextHolder: 'This is Old Sample Text'
//         }
//     }

//     ChangeTextFunction = () => {
//         this.setState({
//             TextHolder: "This is New Text."
//         })
//     }

//     render() {
//         return (
//             <View style={styles.MainContainer}>
//                 <Text style={{ marginBottom: 20, fontSize: 20 }}> {this.state.TextHolder} </Text>
//                 <Button title="Change Text Component Text" onPress={this.ChangeTextFunction} />
//             </View>
//         );
//     }
// }


// const styles = StyleSheet.create(
//     {
//         MainContainer:
//         {
//             justifyContent: 'center',
//             alignItems: 'center',
//             flex: 1,
//             marginTop: (Platform.OS) === 'ios' ? 20 : 0
//         }
//     });

import React, { Component } from 'react'  
import {StyleSheet,View, Text,Picker} from 'react-native'  
  
export default class SwitchExample extends Component {  
    state = {  
        choosenIndex: 0  
    };  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text style={styles.textStyle}>Picker Example</Text>  
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Java" value="java" />  
                    <Picker.Item label="JavaScript" value="js" />  
                    <Picker.Item label="React Native" value="rn" />  
                </Picker>  
                <Text style={styles.textStyle}> {"Index ="+this.state.choosenIndex}</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
}) 