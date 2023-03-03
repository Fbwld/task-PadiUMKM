import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import Login from '../pages/Login'
import { useNavigation } from '@react-navigation/core';



const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        </>
    );
};

export default Router;