import { StyleSheet, SafeAreaView, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import LoginViewModel from './LoginViewModel';

export default LoginView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, handleLoginWithGoogle } = LoginViewModel()

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
            <Pressable style={styles.signInButton} onPress={() => handleLogin(email, password)}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.socialButton} 
                        onPress={() =>{
                            navigation.navigate('Signup')
                            setEmail("")
                            setPassword("")
                        }}>
                <Text style={styles.socialButtonText}>Sign up</Text>
            </Pressable>
            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>
            <Pressable style={styles.socialButton} onPress={handleLoginWithGoogle}>
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </Pressable>
        </View>
    </SafeAreaView>
        // <SafeAreaView style={styles.container}>
        //     <View>
        //         <TextInput
        //             placeholder="Email"
        //             value={email}
        //             onChangeText={setEmail}
        //         />
        //         <TextInput
        //             placeholder="Password"
        //             value={password}
        //             onChangeText={setPassword}
        //             secureTextEntry
        //         />
        //         <Button title="Login"
        //             onPress={() => handleLogin(email, password)}
        //         />
        //         <Button title="GoogleLogin"
        //             onPress={() =>  handleLoginWithGoogle}
        //         />
        //         <Button title="Signup"
        //             onPress={() => {
        //                 navigation.navigate('Signup')
        //                 setEmail("")
        //                 setPassword("")
        //             }}
        //         />
        //     </View>
        // </SafeAreaView>

    );
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
    socialButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 8,
    },
    socialButtonText: {
        fontSize: 16,
    },
});
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'top',
//         alignItems: 'center',
//         top: 30,
//         padding: 32,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
// });