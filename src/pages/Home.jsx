/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
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
          <LinearGradient 
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={['#283854', '#2c3f69', '#344a84', '#335498']}
          style={styles.buttoLogin}>
            <TouchableOpacity>
              <Text>LOGIN</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </LinearGradient>

  );
}
const image = {
  img : require('../assets/header.png')
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttoLogin :{
    paddingHorizontal: 120,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    marginTop:50,
  },
  buttonRegister :{
    paddingHorizontal: 111,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#31477b",  
  },
  linearGradient: {
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignContent:'center',
    paddingLeft:50,
    paddingRight:50,
  },
  textHeader:{
    fontSize:50,
    marginBottom: 10,
    textAlign:'center',
  },
  imgHome:{
    width: 590,
    height:320,
    resizeMode: 'contain'
  }
});
export default Home;