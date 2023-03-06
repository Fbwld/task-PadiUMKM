import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const Menu = props => {
    const [isSelected, setSelection] = useState(false);
  return (
    <View
      style={{
        marginHorizontal: 45,
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 20,
      }}>
      <View style={{ flexDirection: 'row'}}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{alignSelf: 'center',}}
        />
        <Text style={{margin: 5,fontWeight: 'bold'}}>Remember me</Text>
      </View>  
      {/* <TouchableOpacity style={{flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{props.signupText}</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{fontWeight: 'bold'}}>{props.forgotPasswordText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
