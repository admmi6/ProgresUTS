import React, {Component} from 'react';
import {AppRegistry,
        StyleSheet,
        View,
        Image,
        Text,
        TextInput,
        TouchableOpacity,
        Alert,
        KeyboardAvoidingView,
      } from 'react-native';
import { StackNavigator } from "react-navigation";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Container, Content, Item, Input, Icon } from 'native-base';

//import styles from './styles';
import Home from './Home';

var URL = "http://mhs.rey1024.com/1415051038/fitnessapp/login.php";

const background = require('./Image/fit.jpg');
const logo = require('./Image/fitapp.png');
const person = require('./Image/person.png');
const lock = require('./Image/lock.png');

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  state = {
    username: '',
    password: '',
  }

   LoginPress() {
    if (this.state.username == '') {
      Alert.alert(
            'Error',
            'Username harus diisi!',
      );
      return;
    }

    if (this.state.password == '') {
      Alert.alert(
            'Error',
            'Password harus diisi!',
      );
      return;
    } else {
      fetch(URL + '?username='+this.state.username+'&password='+this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert(
            'Error',
            'Username atau Password Salah!',
          );
        }
        else {
           Alert.alert(
            'Success',
            'Login Success',
          );
          const { navigate } = this.props.navigation;
          navigate('Home');
        }
      })
      .done();
      }
    }

  render () {
    return (
       <View style={{ paddingVertical: 20 }}>
          <Card>
            <Text style={{textAlign: 'center', fontSize: 20}}>Sign In Please..</Text>
            <Image source={logo} style={{width: 300, height: 100, justifyContent: 'center', alignItems: 'center'}} />
          </Card>

          <Card>
            <FormLabel>Username</FormLabel>
            <FormInput 
               onChangeText={(u) => this.setState({username: u})}
                placeholder="Username..."
            />


            <FormLabel>Password</FormLabel>
            <FormInput
              onChangeText={(p) => this.setState({password: p})}
                secureTextEntry 
                placeholder="Password..." />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN IN"
              onPress={this.LoginPress.bind(this)}
            />
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#bcbec1" }}
              title="Sign Up"
              onPress={() => this.props.navigation.navigate("Daftar")}
            />
          </Card>
      </View>
    );
  }

 
}

const Navigator = StackNavigator({
  Login: {screen: Login},
  Home: { screen: Home },
}, {
  headerMode: 'none'
});



AppRegistry.registerComponent('FitAppUts', () => Navigator);
