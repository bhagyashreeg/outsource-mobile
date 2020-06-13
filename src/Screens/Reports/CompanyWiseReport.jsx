import React from "react";

import { Text,List,Item,Input,Icon, View ,Left,Body,Right,ListItem,index,Button} from "native-base";
import { Center } from "../../Components/Center";
import { ScrollView, StyleSheet} from 'react-native';

export default (props, { navigation }) => {
  
  return (
    <View>
       <ScrollView>
         <List>
    <Center>
      <Text style={styles.text}>Company wise report</Text>
    </Center>
    
     
         <Item >
             <Input style={styles.item}
                 placeholder="Search company name"
                
             />
             <Icon active name="ios-search" />
         </Item>
         {/* {userListValuesFiltered.map((row, index) => { */}
                    {/* return  */}
                    <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                          <Text>IBM</Text>
                            {/* <Text>{row.employeeFirstName + " " + row.employeeMiddleName + " " + row.employeeLastName}</Text>
                            <Text note numberOfLines={1}>Employee ID : {row.employeeId}</Text> */}
                        </Body>
                        <Right>
                            <Button
                                transparent
                               onPress={() => { setShow(true); setSelected(row); }}
                             >
                                <Text>View</Text>
                                </Button>
                        </Right>
                        </ListItem>
                        <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                          <Text>Philips</Text>
                          </Body>
                        <Right>
                            <Button
                                transparent
                               onPress={() => { setShow(true); setSelected(row); }}
                             >
                                <Text>View</Text>
                                </Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                          <Text>Worldlab</Text>
                          </Body>
                        <Right>
                            <Button
                                transparent
                               onPress={() => { setShow(true); setSelected(row); }}
                             >
                                <Text>View</Text>
                                </Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                          <Text>Tech zone</Text>
                          </Body>
                        <Right>
                            <Button
                                transparent
                               onPress={() => { setShow(true); setSelected(row); }}
                             >
                                <Text>View</Text>
                                </Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                          <Text>Google</Text>
                          </Body>
                        <Right>
                            <Button
                                transparent
                               onPress={() => { setShow(true); setSelected(row); }}
                             >
                                <Text>View</Text>
                                </Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail key={index}>
                        <Left>
                            <Icon active name='md-home' />
                        </Left>
                        <Body>
                          <Text>Shopify</Text>
                          </Body>
                        <Right>
                            <Button
                                transparent
                               onPress={() => { setShow(true); setSelected(row); }}
                             >
                                <Text>View</Text>
                                </Button>
                        </Right>
                    </ListItem>

    </List>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
text: {
     fontSize:20,
     color:'blue',
     fontWeight:'bold'
    },
  item:{
// height:400,
  }
});