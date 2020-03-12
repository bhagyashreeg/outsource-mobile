import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import bgImage from './images/indexlogo.jpg';
import logo from './images/nms-logo.png';
import {KeyboardAvoidingView} from 'react-native';




const { width: WIDTH } = Dimensions.get('window')//returns the current screen dimension
export default (props) => {
  let { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>KPO</Text>
      </View>


      {/* <View style={styles.container}>
        <Text>Login</Text>
        <Button title="Go to Register" onPress={() => {
          navigation.navigate("Register")
        }}>
        </Button> */}

      {/* ------------------------username input box----------------------- */}
      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
        // value={this.state.username}
        // onChangeText={username => this.setState({ username })}

        />
      </View>

      {/* ----------------------Password input box---------- */}

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          // secureTextEntry={this.state.showPassword}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'

        // value={this.state.password}
        // onChangeText={password => this.setState({ password })}
        />

        {/* <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPassword.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'}
                            size={26} color={'rgba(255,255,255,0.7)'} />
                    </TouchableOpacity> */}
      </View>

      {/* --------------------------Button Login------------------ */}
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
        {/* <Text
                        style={styles.text}
                        onPress={() =>
                            this._postData()
                        }

                    >Login{this.state.text}</Text> */}
      </TouchableOpacity>
      <StatusBar hidden={true} />
      {/* </View> */}
      
    </ImageBackground>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,

  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});