
import React, { useState } from 'react';
import { StyleSheet, View, Picker, Button, Alert } from 'react-native';
export default FunctionBasedForm = () => {
    const [PickerValueHolder, setPickerValueHolder] = useState('');

    const GetPickerSelectedItemValue = () => {
        Alert.alert(PickerValueHolder);
    }

    return (
        <View style={styles.MainContainer}>
            <Picker
                selectedValue={PickerValueHolder}
                onValueChange={(itemValue, itemIndex) => setPickerValueHolder({ PickerValueHolder: itemValue })} >
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