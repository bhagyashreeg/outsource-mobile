
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Picker } from 'react-native';

export default (props) => {
    let { countryList, companyStatusList } = props.company;
    const [PickerValueHolder, setPickerValueHolder] = useState('');
    console.log("prps", props);

    return (
        <View>
            <Text>Display data!</Text>
            <Text>The country code is!            {countryList[0].countryCode}</Text>
            <Text>The country ID is!              {countryList[0].countryId}</Text>
            <Text>The country name is!            {countryList[0].countryName}</Text>
            <Text>The company status ID is!       {companyStatusList[0].companyStatusId}</Text>
            <Text>The company status name is 1!   {companyStatusList[0].companyStatusName}</Text>
            <Text>The company status name is 2!   {companyStatusList[1].companyStatusName}</Text>
            <Text>The company status name is 3!   {companyStatusList[2].companyStatusName}</Text>
            <Text>The company status name is 4!   {companyStatusList[3].companyStatusName}</Text>

            <Picker
                selectedValue={PickerValueHolder}
                onValueChange={(itemValue, itemIndex) =>
                    setPickerValueHolder({ PickerValueHolder: itemValue })} >
                {companyStatusList.map((item, key) => (
                    <Picker.Item label={item.companyStatusName} value={item.companyStatusName} key={key} />)
                )}
            </Picker>
        </View>
    )
}
