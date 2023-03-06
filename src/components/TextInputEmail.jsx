import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputEmail = props => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#c1c9f0',
            width: 50,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Icon name={props.icon} size={20} color="#285ca3" />
        </View>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#c1c9f0','#bcc4ee','#8c9be4']}
        style={{
            paddingHorizontal: 2,
            paddingVertical: 2,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        }}>
          <TextInput
            value={props.state}
            style={{
              flex: 1,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              paddingVertical: 10,
              paddingHorizontal:170,
              paddingLeft: 12,
              color:'#285ca3',
              
            }}
            placeholderTextColor='#285ca3'
            placeholder={props.placeholder}
            onChangeText={text => props.set(text)}
            secureTextEntry={props.isPassword}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default TextInputEmail;
