
import React, { useState } from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { List, ListItem, Icon, Text, Left, Body, Right, Button, Item, Input } from 'native-base';

export default (props) => {
    let { company: { companyList }, navigation } = props;

    let [companyListValuesFiltered, setCompanyListValuesFiltered] = useState(companyList);

    function searchUser(textToSearch) {
        setCompanyListValuesFiltered(companyList.filter(i => i.companyName.toLowerCase().includes(textToSearch.toLowerCase())))
        if (companyListValuesFiltered.length <= 0) {
            alert(textToSearch + " company doesn't exist")
        }
    }

    return (
        <ScrollView>
            
            <List>
                <Item>
                    <Input
                    style={styles.text}
                        placeholder="Search company"
                        onChangeText={text => { searchUser(text) }} 
                    />
                    <Icon active name="ios-search" />
                </Item>
                
                {companyListValuesFiltered.map((row, index) => {
                    
                    return <ListItem
                        thumbnail
                        key={index}
                        style={styles.list}
                    >
                        
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                            <Text>{row.companyName}</Text>
                            <Text note numberOfLines={1}>Company ID : {row.companyId}</Text>
                        </Body>
                        <Right>
                            <Button
                                transparent
                                onPress={() => navigation.navigate('CompanyDetails', {
                                    companyId: row.companyId
                                })}
                            >
                                <Text>View</Text>
                            </Button>
                        </Right>
                
                    </ListItem>
                   
                })}
                

            </List>
             
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
//   list:{
//       backgroundColor:'grey',
//       marginLeft:5,
//   },
  
})