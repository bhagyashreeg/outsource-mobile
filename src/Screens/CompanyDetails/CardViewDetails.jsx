import React from 'react';
import { Text, Container,Card, CardItem, Body  } from 'native-base';
import { Center } from '../../Components/Center';
import { StyleSheet } from 'react-native'

export const CardDetails = (props) => {
    return (
        <Container style = {styles.container}>
           <Card style = {styles.redbox}>
            <CardItem header bordered>
              <Text>100</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  No... of Employees
                </Text>
              </Body>
            </CardItem>    
          </Card>

          <Card style = {styles.bluebox}>
            <CardItem header bordered>
              <Text>50000</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Total Revenue
                </Text>
              </Body>
            </CardItem>    
          </Card> 

          <Card style = {styles.blackbox}>
            <CardItem header bordered>
              <Text>Misc...</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Others                  .
                </Text>
              </Body>
            </CardItem>    
          </Card> 
       </Container>
    )
}

const styles = StyleSheet.create ({
    container: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       alignItems: 'flex-start',
       backgroundColor: 'grey',
       height: 600
    },
    redbox: {
       width: 115,
       height: 100,
    },
    bluebox: {
       width: 115,
       height: 100,
    },
    blackbox: {
       width: 115,
       height: 100,
    },
 })