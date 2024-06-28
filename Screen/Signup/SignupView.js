import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SignupViewModel from './SignupViewModel';
import { SafeAreaView } from 'react-native-safe-area-context';

export default SignupView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleRegister } = SignupViewModel();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address."
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor="#999"
                />
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => handleRegister(email, password)}>
                    <Text style={styles.signInButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        fontSize: 16,
    },
    signInButton: {
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 12,
    },
    signInButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    forgotPassword: {
        color: '#007bff',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    orText: {
        marginHorizontal: 8,
        color: '#999',
    },
});