/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LoginButton from '../components/LoginButton';
import TextInputEmail from '../components/TextInputEmail';
import Menu from '../components/Menu';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={{flex: 1,  backgroundColor: '#586cd7'}}>
      <TouchableOpacity  onPress={()=>navigation.goBack()} style={{
        position:'absolute',
        zIndex:1,
        marginTop:35,
        marginLeft:25
      }}>
        <Image source={require('../assets/back.png')}/>
      </TouchableOpacity>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/test2.png')}
        style={{width: 600, 
        height: 200,
        resizeMode: 'contain',
        }}
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
        icon="user"
        isPassword={false}
      />
       <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="Password"
        isPassword={true}
      />
      <Menu signupText="Remember Me" forgotPasswordText="Lupa Password?" />
      <LoginButton text="LOGIN"/>
      <Text>Don't have an account?
        <Text 
        style={{ fontWeight: 'bold', 
        textDecorationLine:'underline',
        }}
        onPress={()=>navigation.navigate('SignUp')}>
          Sign Up
          </Text>
        </Text>
    </View>
  </ScrollView>
  );
}
const image = {
  img : require('../assets/header-home.png')
}

export default Login;
