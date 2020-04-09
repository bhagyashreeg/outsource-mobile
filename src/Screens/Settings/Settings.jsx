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
// -----------------------------------------------------------------------
// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert } from 'react-native';
// export default FunctionBasedForm = () => {
//     const [PickerValueHolder, setPickerValueHolder] = useState('');

//     GetPickerSelectedItemValue = () => {
//         Alert.alert(PickerValueHolder);
//     }

//     return (
//         <View style={styles.MainContainer}>
//             <Picker
//                 selectedValue={PickerValueHolder}
//                 onValueChange={(itemValue, itemIndex) => setPickerValueHolder({ PickerValueHolder: itemValue })} >
//                 {companyStatusList.map((item, key) => (
//                     <Picker.Item label={item.companyStatusName} value={item.companyStatusName} key={key} />)
//                 )}
//             </Picker>
//             <Button title="Click Here To Get Picker Selected Item Value" onPress={GetPickerSelectedItemValue()} />
//         </View>
//     );

// }
// const styles = StyleSheet.create({
//     MainContainer: {
//         justifyContent: 'center',
//         flex: 1,
//         margin: 10
//     }
// });
// -----------------------------------------------------------------------------------------------------------------------------
import React, { useContext, useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View, StatusBar, TextInput, Button, FlatList, SafeAreaView } from 'react-native';
import { Drawer } from 'native-base';
import { Center } from '../../Components/Center';
import { AuthContext } from "../../Context/AuthProvider";
// import { FlatList } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/employee-list/redeem';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        Name: 'First name 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        Name: 'First name 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        Name: 'First name 3',
    },
];
function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default () => {
    // StatusBar.setHidden(true);
    // StatusBar.setBackgroundColor = "red";
    const { logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(baseURL, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'token': '57Cz0gQ7tnq9jMTIW4WxlMPp4dxfA44ONRQTRo9G4Ok='
            },
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => setData(data))
            .then((data) => {
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (<Center>
            <Text>LOADING</Text>
        </Center>)
    }
    function getVal() {
        return (<Text>Display data!</Text>)
    }


    return (
        <ScrollView >
            <StatusBar barStyle="light-content" hidden={true} backgroundColor="red" translucent={true} />

            <Center>
                <Text >Employee Enroll List</Text>
            </Center>
            <View>
                <Text>Employee Name</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Search Text"
                    onChangeText={name => setName(name)}
                    defaultValue={name}
                />
                <Button
                    // onPress={handlePress}
                    title="Search"
                    color="blue"
                />
                <Button
                    // onPress={handlePress}
                    title="Reset"
                    color="red"
                />

            </View>

            <FlatList
                data={DATA}
                // renderItem={({ item }) => <Item title={item.title} />}
                renderItem={({ item }) =>
                    (<Text >
                        {/* <Item title={item.title} />
                        <Item title={item.Name} /> */}
                        {item.Name}{item.title}
                    </Text>)
                }
                keyExtractor={item => item.id}
            />


        </ScrollView >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});