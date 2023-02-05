import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'
        screenOptions={({ navigation, route }) => ({
            headerTitle: "Login",
            headerTintColor: 'white',
            headerStyle: { backgroundColor: "#2196F3" },
        })}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
