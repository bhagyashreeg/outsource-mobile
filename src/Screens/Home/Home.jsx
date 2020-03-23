import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { Center } from '../../Components/Center';
import { AuthContext } from "../../Context/AuthProvider";


export default () => {
    constructor() {
        super();
        this.state = {
            data: null,
            loaded: true,//setting the initial as true
            error: null
        }
    }
    const { logout } = useContext(AuthContext);
    baseURL = 'https://nmsserver.herokuapp.com/proxy/api/user/company/master';
    getData = (ev) => {
        this.setState({ loaded: false, error: null });//trigger the loader
        let url = this.baseURL;
        let h = new Headers();
        h.append('Content-Type', 'application/json; charset=utf-8');
        h.append('token', '57Cz0gQ7tnq9jMTIW4WxlMPp4dxfA44ONRQTRo9G4Ok=');
        let req = new Request(url, {
            headers: h,
            method: 'POST'
        });
        fetch(req)
            .then(response => response.json())
            .then(this.showData)
            .catch(this.badStuff)
        this.setState({ data: json.Object })
    }
    showData = (data) => {
        this.setState({ loaded: true, data });//when the data comes back setting the loaded to true...
        console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*_*_*_*_*_*_*_*_*_*_*_*_*_*")
        console.log(data);
        JSON.stringify(data);
        console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*_*_*_*_*_*_*_*_*_*_*_*_*_*")
        console.log(JSON.stringify(data.companyTypeList.companyTypeName));
        console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*_*_*_*_*_*_*_*_*_*_*_*_*_*")
        if (data.hasOwnProperty("companyTypeList")) {
            console.log("data", data.companyTypeList[1]);
        }
    }
    badStuff = (err) => {
        this.setState({ loaded: true, error: err.message });
    }
    return (
        <ScrollView  >
            <Center>
                <Text>Hello</Text>
                <Button onPress={() => logout()} title="Logout"></Button>
            </Center>
            {!this.state.loaded && (//when this  is false...then
                <Text>LOADING</Text>//then call loading
            )}
            <Text style={styles.txt}>Display data!</Text>
            <Button title="Get Data"
                onPress={this.getData} />

            {this.state.error && (
                <Text style={styles.err}>{this.state.error}</Text>
            )}
            {/* --------------------------demo tried with display demo 1------------------------ */}
            {/* {
            this.state.data && this.state.data.length > 0 && (
                this.state.data.map(comment => (
                    <Text style={styles.txt}>pppp
                        {alert("hai")}
                    </Text>

                ))
            )
        } */}
            {/* --------------------------demo tried with display demo 2------------------------ */}
            <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                    <Text>
                        {`${item.companyStatusList.companyStatusId}`}
                    </Text>
                }
            />

        </ScrollView>

    )
}