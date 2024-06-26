import { StyleSheet, SafeAreaView, Button, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import LoginViewModel from './LoginViewModel';

export default LoginView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, handleLoginWithGoogle } = LoginViewModel()

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Login"
                    onPress={() => handleLogin(email, password)}
                />
                <Button title="GoogleLogin"
                    onPress={() => handleLoginWithGoogle()}
                />
                <Button title="Signup"
                    onPress={() => {
                        navigation.navigate('Signup')
                        setEmail("")
                        setPassword("")
                    }}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        top: 30,
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});