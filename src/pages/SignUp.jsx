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

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
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
        resizeMode: 'contain',}}
      />
      <Text style={{fontSize: 38, fontWeight: 'bold'}}>
        Register
      </Text>
      <Text style={{marginTop: 5, fontSize: 15}}>
        Create your account
      </Text>
    </View>
    <View style={{
      alignItems:'center',
      marginTop:40
    }}>
      <TextInputEmail
        state={username}
        set={setUsername}
        placeholder="Username"
        icon="user"
        isPassword={false}
      />
       <TextInputEmail
        state={email}
        set={setEmail}
        placeholder="Email address"
        icon="envelope"
        isPassword={false}
      />
       <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="Password"
        isPassword={true}
      />
       <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="Confirm Password"
        isPassword={true}
      />
      <Text style={{
        marginHorizontal: 60,
        marginTop: 10,
        }}>By registering, you are agreein tp our  Terms of us and Privacy Policy.</Text>
      <LoginButton text="REGISTER"/>
      <Text>Already have an account?  
        <Text 
        style={{ fontWeight: 'bold',
        textDecorationLine:'underline',
        }}
        onPress={()=>navigation.navigate('Login')}>
            Login
        </Text>
        </Text>
    </View>


  </ScrollView>
  );
}
const image = {
  img : require('../assets/header-home.png')
}

export default SignUp;
