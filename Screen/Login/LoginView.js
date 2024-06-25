import { StyleSheet, SafeAreaView, Text, View, Button, TextInput } from 'react-native';
// import loginViewModel from "./LoginViewModel";

function LoginView() {
    return (
        <SafeAreaView>
            <View style={styles.rootContainer}>
                <Text style={styles.title}>LoginScreen!</Text>
                <Text>LoginScreen initialize!!</Text>
            </View>
        </SafeAreaView>

    );
}

export default LoginView;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});