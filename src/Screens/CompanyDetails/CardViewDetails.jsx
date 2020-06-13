import React from 'react';
import { Text, Container,Card, CardItem, Body  } from 'native-base';
import { Center } from '../../Components/Center';
import { StyleSheet } from 'react-native'

export const CardDetails = (props) => {
    return (
        <Container style = {styles.container}>
           <Card style = {styles.cardemployees}>
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

          <Card style = {styles.cardrevenue}>
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

          <Card style = {styles.cardother}>
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
    cardemployees: {
       width: 115,
       height: 100,
    },
    cardrevenue: {
       width: 115,
       height: 100,
    },
    cardother: {
       width: 115,
       height: 100,
    },
 })