import React from 'react';
import { Text, View,Card,CardItem,Container,Content,Body,Grid} from 'native-base';
import {ScrollView,StyleSheet,FlatList} from 'react-native';
import { Center} from '../../Components/Center';

// const numColumns=2
export default (props) => {
    console.log("company details props", props);
    return (
        
        <ScrollView >
            {/* <Grid style={styles.grid}> */}
            {/* <View style={{ flexDirection: 'row', justifyContent:'flex-end' }}> */}
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                {/* <FlatList
                numColumns={numColumns}
                />  */}
        {/* <Center>
            <Text>
                Company Details based on current row item clicked
            </Text>
        </Center> */}

<Container style={styles.container}>
<Content style={styles.content} >

  <Card style={styles.card}>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card style={styles.card}>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card >
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card >
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  <Card>
    <CardItem>

      <Body>
        <Text>Cost sheet</Text>
        <Text>cost</Text>
      </Body>

    </CardItem>
  </Card>
  
  
  </Content>
          </Container>
          </View>
          
          </ScrollView>
          
    )
}


const styles = StyleSheet.create({
   container:{
       flex:1,
    //    flexDirection:'row',
    //     flexWrap: 'wrap',
    justifyContent:'flex-end',
       width:350,
   },
   card:{
    // flex:1,
    // flexDirection:'row',
    //  flexWrap: 'wrap',
    // justifyContent:'flex-start',
    // position:'relative',
     width:100,
    //  height:100,
       
   },
   
});