import React, { useState, useContext } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { View, Text } from 'native-base';
import { AuthContext } from "../../Context/AuthProvider";

export default (props) => {
  const { login } = useContext(AuthContext);
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
  const submitLogin = async () => {
    if (userName.trim() === "") {
      alert("Username required")
    } else if (password.trim() === "") {
      alert("Password required")
    } else {
      login({ userName, password });
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./images/nms-logo.png')}
      />
      <Text style={styles.logo}>KPO</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setUserName(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)} />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0487D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboard: {
    flex: 1
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#5ABF86",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  loginText: {
    color: "white",
    fontWeight: "700"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#012840",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }
});

