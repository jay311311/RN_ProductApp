import { View, SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import SignupViewModel from './SignupViewModel';

export default SignupView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleRegister } = SignupViewModel();
    
    return (
        <SafeAreaView>
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
                <Button title="Register"
                    onPress={() => {
                        handleRegister(email, password);
                        setEmail("")
                        setPassword("")
                    }
                    }
                />
            </View>
        </SafeAreaView>
    )
} 
