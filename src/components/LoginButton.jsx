import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginButton = props => {
  return (
    <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{x: 1, y: 1 }}
    colors={['#283854', '#2c3f69', '#344a84', '#335498']}
    style={{
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 25,
        marginBottom: 10,
        marginTop:50,
    }}>
        <TouchableOpacity style={{
            width: 290,
            paddingVertical: 10,
            borderRadius:90,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 2,
            shadowRadius: 6.27,
            elevation: 20,
        }}
        onPress={props.onPress}
        >
        <Text style={{
        color: '#FFFFFF', 
        textAlign: 'center',
        fontWeight: 'bold',
}}
        >
        {props.text}
        </Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginButton;
