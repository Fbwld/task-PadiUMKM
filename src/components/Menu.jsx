import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';


const Menu = props => {
  return (
    <View
      style={{
        marginHorizontal: 45,
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 20,
      }}>
      <TouchableOpacity style={{flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{props.signupText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{fontWeight: 'bold'}}>{props.forgotPasswordText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
