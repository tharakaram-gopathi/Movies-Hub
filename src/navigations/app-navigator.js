import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { setSignOut } from '../redux/slices/authentication';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const dispatch = useDispatch();

    const onPressLogoutEvent = () => {
        dispatch(setSignOut()) // after logout all saved data will be cleared
    }
    return (
        <Stack.Navigator initialRouteName='Dashboard'
            screenOptions={({ navigation, route }) => ({
                headerRight: () => (
                    <TouchableOpacity onPress={() => onPressLogoutEvent()}>
                        <Text style={{ color: "#E34234", fontWeight: "bold" }}>{"Logout"}</Text>
                    </TouchableOpacity>
                ),
                headerTitle: "Dashboard",
                headerTintColor: 'white',
                headerStyle: { backgroundColor: "#2196F3" },
            })}
        >
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator
