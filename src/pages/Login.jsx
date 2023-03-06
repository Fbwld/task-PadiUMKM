/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import LoginButton from '../components/LoginButton';
import TextInputEmail from '../components/TextInputEmail';
import Menu from '../components/Menu';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={{flex: 1,  backgroundColor: '#586cd7'}}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
      }}>
      <Image
        source={require('../assets/insia.png')}
        style={{width: 200, height: 200}}
      />
      <Text style={{fontSize: 38, fontWeight: 'bold'}}>
        Welcome Back
      </Text>
      <Text style={{marginTop: 5, fontSize: 15}}>
        Login to your account
      </Text>
    </View>
    <View style={{
      alignItems:'center',
      marginTop:50
    }}>
      <TextInputEmail
        state={email}
        set={setEmail}
        placeholder="Username"
        icon="envelope"
        isPassword={false}
      />
       <TextInputEmail
        state={email}
        set={setEmail}
        placeholder="Paasword"
        icon="envelope"
        isPassword={false}
      />
      <Menu signupText="Remember Me" forgotPasswordText="Lupa Password?" />
      <LoginButton text="LOGIN"/>
      <Text>Don't have an account? <Text style={{ fontWeight: 'bold', textDecorationLine:'underline'}}>Sign Up</Text></Text>

    </View>


  </ScrollView>
  );
}
const image = {
  img : require('../assets/header-home.png')
}

export default Login;
