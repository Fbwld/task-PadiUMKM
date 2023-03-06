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

const SignUp = ({navigation}) => {
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
        Register
      </Text>
      <Text style={{marginTop: 5, fontSize: 15}}>
        Create your account
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
        placeholder="Email address"
        icon="envelope"
        isPassword={false}
      />
      <TextInputEmail
        state={email}
        set={setEmail}
        placeholder="Password"
        icon="envelope"
        isPassword={false}
      />
      <TextInputEmail
        state={email}
        set={setEmail}
        placeholder="Confirm password"
        icon="envelope"
        isPassword={false}
      />
      <Text>By registering, you are agreein tp our  Terms of us and Privacy Policy.</Text>
      <LoginButton text="REGISTER"/>
      <Text>Already have an account? 
        <Text 
        style={{ fontWeight: 'bold',
        textDecorationLine:'underline'
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
