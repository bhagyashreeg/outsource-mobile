import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    StatusBar,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField, FilledTextField, OutlinedTextField } from 'react-native-material-textfield';
import { ThemeContext } from 'react-navigation';

export default class RegCompform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    componentDidMount() {
        
        fetch('https://nmsserver.herokuapp.com/proxy/api/user/company/master',{
            method:'GET',
            headers:{
                loginToken:this.props.navigation.state.params.JSON_ListView_Clicked_Item
            }
        })
            .then((response) => response.json())
            .then((responseJdatason) => {
                console.log("this.props.navigation.state.params.JSON_ListView_Clicked_Item")
                this.setState({
                    isLoading: false,
                    dataSource: responseJdatason.countryList,
                })
            })
        .catch ((error) => {
            console.log(error);
        });
    }


    static navigationOptions = {
        //Setting the header of the screen
        title: 'CompanyRegistration',
        header: null,

    };
    render() {
        /*Demo for country and states variable*/
        let Country = [{
            value: 'India',
        }, {
            value: 'SriLanka',
        }];

        let States = [{
            value: 'Karnataka',
        }, {
            value: 'Kerala',
        }, {
            value: 'Goa',
        }];
        /*Demo for display counries API data*/
        if(this.state.isLoading){
            return(
                <View style={styles.container}></View>
            )
        }else{
            console.log(this.state)
            // let country = this.state.dataSource.map((val,key)=>{
            //     return<View key={key}>
            //         <Text>{val.countryName}</Text>
            //     </View>
            // });

        return (
            // <View style={styles.Container}>
            <View style={styles.RegCompform}>
                <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />
                <ScrollView>
                    <Text style={styles.header}>
                        Company Registration
                    </Text>
                    {/* {country} */}
                    {/* <div>
                        <p>{React.version}</p>
                    </div> */}


                    {/* <Text>Company name</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <TextField
                        label='Company name'
                        keyboardType='email-address'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    />
                    {/* <Text >Company Type</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <TextField
                        label='Company Type'
                        keyboardType='email-address'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    />
                    <TextField
                        label='Token ID'
                        keyboardType='email-address'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        value = {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
                    />
                    
                    {/* <Text >Contact Person</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <TextField
                        label='Company Person'
                        keyboardType='email-address'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    />

                    <TextField
                        label='Company Email ID'
                        keyboardType='email-address'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    />
                    {/* <Text>Company Status</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <Dropdown
                        label='Company Status'
                        data={States}
                    />
                    {/* <Text>Country</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}

                    {/* <Text>Pin Code</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <TextField
                        label='Pin Code'
                        keyboardType='phone-pad'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    />
                    {/* <Text>Country</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <Dropdown
                        label='Country'
                        data={Country}
                    />
                    {/* <Text>State</Text><TextInput style={styles.textinput} placeholder="Your name" underlineColorAndroid={'transparent'} /> */}
                    <Dropdown
                        label='State'
                        data={States}
                    />
                    <TextField
                        label='Phone number'
                        keyboardType='phone-pad'
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                    />
                    <Button
                        onPress={this.onPressButton}
                        title="Submit"
                        disabled={false}
                    />
                </ScrollView>
            </View>
            // </View>
        );
    }
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
    },
    regform: {
        alignSelf: 'stretch',

    },
    header: {
        fontSize: 24,
        color: 'white',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,

        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    }
});