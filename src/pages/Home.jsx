/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React , {useState, useEffect}from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginButton from '../components/LoginButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  return (
    <LinearGradient
    colors={['#285ca3', '#2d5fb0', '#4e69d0' , '#2b5eab']}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    >
    <Image source={image.img} style={styles.imgHome}/>
    <Text style={styles.textHeader}>Plantly</Text>
    <Text>Can't seem to keep a plant alive?</Text>
    <Text>Let us help you change that</Text>
    <Icon name="check" size={30} color="#900" />

    <LoginButton text="LOGIN" 
    onPress={()=>navigation.navigate('Login')}/>
    <TouchableOpacity style={styles.buttonRegister} 
    onPress={()=>navigation.navigate('SignUp')}>
      <Text>SIGN UP</Text>
    </TouchableOpacity>
    </LinearGradient>
  );
}
const image = {
  img : require('../assets/header-home.png')
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttoLogin :{
    borderRadius: 25,
    marginBottom: 10,
    marginTop:50,
  },
  buttonRegister :{
    paddingHorizontal: 114,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#31477b",  
  },
  textHeader:{
    fontSize:50,
    marginBottom: 10,
    textAlign:'center',
  },
  imgHome:{
    width: 550,
    height:300,
    resizeMode: 'contain',
    marginBottom:25
  }
});
export default Home;
