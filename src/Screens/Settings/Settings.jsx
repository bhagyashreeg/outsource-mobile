// import React, { useContext, useState, useEffect } from 'react';
// import { Text, ScrollView, StyleSheet } from 'react-native';
// import { Drawer } from 'native-base';
// import { Center } from '../../Components/Center';
// import { AuthContext } from "../../Context/AuthProvider";
// const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/master';

// export default () => {
//     const { logout } = useContext(AuthContext);
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setLoading(true);
//         fetch(baseURL, {
//             headers: {
//                 'Content-Type': 'application/json; charset=utf-8',
//                 'token': '57Cz0gQ7tnq9jMTIW4WxlMPp4dxfA44ONRQTRo9G4Ok='
//             },
//             method: 'POST'
//         })
//             .then(response => response.json())
//             .then(data => setData(data))
//             .then((data) => {
//                 setLoading(false);
//                 console.log(data);
//             })
//             .catch(() => {
//                 setLoading(false);
//             })
//     }, []);

//     if (loading) {
//         return (<Center>
//             <Text>LOADING</Text>
//         </Center>)
//     }
//     function getVal() {
//         return (<Text>Display data!</Text>)
//     }


//     return (
//         <ScrollView >

//             <Center>
//                 <Text style={styles.bigBlue}>Settings</Text>

//             </Center>
//             <Text>Displaying settings</Text>



//         </ScrollView>

//     )
// }
// const styles = StyleSheet.create({
//     bigBlue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//         margin: 20,
//     }
// });
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert } from 'react-native';
export default FunctionBasedForm = () => {
    const [PickerValueHolder, setPickerValueHolder] = useState('');

    GetPickerSelectedItemValue = () => {
        Alert.alert(PickerValueHolder);
    }

    return (
        <View style={styles.MainContainer}>
            <Picker
                selectedValue={PickerValueHolder}
                onValueChange={(itemValue, itemIndex) => setPickerValueHolder({ PickerValueHolder: itemValue })} >
                {companyStatusList.map((item, key) => (
                    <Picker.Item label={item.companyStatusName} value={item.companyStatusName} key={key} />)
                )}
            </Picker>
            <Button title="Click Here To Get Picker Selected Item Value" onPress={GetPickerSelectedItemValue()} />
        </View>
    );

}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    }
});