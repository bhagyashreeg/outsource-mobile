import React from "react";
import { 
    Text,
    List,
    Item,
    Input,
    Icon,
    View,
    Left,
    Body,
    Right,
    ListItem,
    index,
    Button,
    DatePicker,
    Container,
    Header,
    Content
  } from "native-base";
import { Center } from "../../Components/Center";
import { ScrollView, StyleSheet} from 'react-native';
import { render } from "react-dom";

export default (props, { navigation }) => {
  
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  
  // setDate(newDate) {
  //   this.setState({ chosenDate: newDate });
  // }
  
  return (
    <View>
       <ScrollView>
         <List>
    
    <Center>
      <Text>Monthly report</Text>
    </Center>
    <Item >
             <Input style={styles.item}
                 placeholder="Search company name"
                
             />
             <Icon active name="ios-search" />
         </Item>


         <Container>
        <Header />
        <Content>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
        </Content>
      </Container>

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
