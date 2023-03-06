import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp';
import { useNavigation } from '@react-navigation/core';



const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}  
                options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="Login" component={Login}
                options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="SignUp" component={SignUp}
                options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
        </>
    );
};

export default Router;