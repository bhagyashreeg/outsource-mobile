import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import bgImage from './images/login-background.jpg';
import logo from './images/nms-logo.png';
import { KeyboardAvoidingView } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')//returns the current screen dimension
export default (props) => {
  let { navigation } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [statePress, setStatePress] = useState(true);

  //--------------Function() to show password---------------------
  onPressPasswordShow = () => {
    if (statePress == false) {
      setStatePress(true);
    }
    else {
      setStatePress(false);
    }
  }
  // -------------Function() to fetch and send credentials--------------
  const _postData = async () => {
    if (userName.trim() === "") {
      alert("Username required")
    } else if (password.trim() === "") {
      alert("Password required")
    } else {
      try {
        fetch('http://outsource-management.aranyaa-construction.com/api/auth/admin-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName,
            password
          })
        })
          .then(res => res.json())
          .catch(error => console.error('Error :', error))
          .then(response => {
            console.log('Success:', response);
            if (response.responseStatus) {
              alert("authenticated successfully!!!");
            } else {
              alert("authenticated Unsuccessfully!!!");
            }
          });
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      {/* ---------------------------logo--------------and --------name------ */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>KPO</Text>
      </View>
      {/* --------------------------------username------------------------------ */}
      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          value={userName}
          onChangeText={userName => setUserName(userName)}

        />
      </View>
      {/* --------------------------------password------------------------------ */}
      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={statePress}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          value={password}
          onChangeText={password1 => setPassword(password1)}
        />

        <TouchableOpacity style={styles.btnEye}
          onPress={onPressPasswordShow}>
          <Icon name={!statePress ? 'ios-eye' : 'ios-eye-off'}
            size={26} color={'rgba(255,255,255,0.7)'} />
        </TouchableOpacity>

      </View>
      {/* --------------------------------button------------------------------ */}
      <TouchableOpacity style={styles.btnLogin}>
        <Text
          style={styles.text}
          onPress={() => _postData()}
        >Login</Text>
      </TouchableOpacity>
      <StatusBar hidden={true} />
      {/* --------------------------------Password------------------------------ */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
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
    borderRadius: 45,
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
    borderRadius: 45,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});

