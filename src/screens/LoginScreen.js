import React, { useState, createRef } from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    Button,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux'
import { setSignIn } from '../redux/slices/authentication';
import { emailValidation, passwordValidation } from '../util/Helper'

const LoginScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const passwordInputRef = createRef();
    const dispatch = useDispatch();

    const handleSubmitPress = () => {
        const userData = {
            isLoggedIn: true,
            email: userEmail,
            password: userPassword
        };
        dispatch(setSignIn(userData)); // store login user data in to redux state
        console.log('Logged in Successfully ===>', userData)
        navigation.navigate('Dashboard') // after Login then navigate to Dashboard screen
    };

    const onChangeEmailText = (input) => {
        setUserEmail(input);
        const isValidEmailAddress = emailValidation(input); // Check email address validation 
        setIsEmailValid(!isValidEmailAddress);
        if (!isValidEmailAddress) setErrortext("Please enter valid email address.");
        else setErrortext("")
    }

    const onChangePasswordText = (input) => {
        setUserPassword(input)
        const isValidPassword = passwordValidation(input);  // Check Password validation 
        setIsPasswordValid(isValidPassword ? true : false)
        if (isValidPassword) setErrortext(isValidPassword);
        else setErrortext("")
    }
    return (
        <View style={styles.mainBody}>
            <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
                    Welcome to  {"Movies Hub"}
                </Text></View>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>

                <View>
                    <KeyboardAvoidingView enabled>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChangeEmailText}
                                placeholder="Enter Email"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    passwordInputRef.current &&
                                    passwordInputRef.current.focus()
                                }
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChangePasswordText}
                                placeholder="Enter Password" //12345
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                ref={passwordInputRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={false}
                                secureTextEntry={true}
                                underlineColorAndroid="#f000"
                                returnKeyType="next"
                            />
                        </View>
                        {errortext != '' ? (
                            <Text style={styles.errorTextStyle}>
                                {errortext}
                            </Text>
                        ) : null}
                        <View style={styles.submitBtn}>
                            <Button
                                color="#2196F3"
                                disabled={isEmailValid || isPasswordValid}
                                title="Submit"
                                onPress={handleSubmitPress}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFF',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    inputStyle: {
        flex: 1,
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    submitBtn: {
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    errorTextStyle: {
        padding: 12,
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});