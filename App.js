import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider, useAuth } from './Service/Auth/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginView from './Screen/Login/LoginView';
import SignupView from './Screen/Signup/SignupView';
import ResultView from './Screen/Result/ResultView';
import ResultViewModel from "./Screen/Result/ResultViewModel"

const Stack = createStackNavigator();

const Main = () => {
  const { currentUser } = useAuth();
  const resultViewModel = ResultViewModel()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currentUser != null ? "Result" : "Login"}>
      <Stack.Screen name="Result" options={{ headerShown: false }}>
            {props => <ResultView {...props} viewModel={resultViewModel} />}
          </Stack.Screen>
        {/* {currentUser != null
          ?
          <Stack.Screen name="Result" options={{ headerShown: false }}>
            {props => <ResultView {...props} viewModel={resultViewModel} />}
          </Stack.Screen>
          :
          <>
            <Stack.Screen name="Login" component={LoginView} />
            <Stack.Screen name="Signup" component={SignupView} />
          </>
        } */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App = () => {
  return (
    <View style={styles.container} >
      <AuthProvider>
        <Main />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 