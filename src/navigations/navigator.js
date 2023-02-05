
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/slices/authentication';

const AppRoute = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log("App is isLoggedIn=====>", isLoggedIn)
    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute
