import { StyleSheet, View } from 'react-native';
import { AuthProvider, useAuth } from './Service/Auth/AuthContext';
import { FirebaseProvider } from './Service/Firestore/FirestoreContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginView from './Screen/Login/LoginView';
import SignupView from './Screen/Signup/SignupView';
import DetilaView from './Screen/Detail/DetailView'
import ResultView from './Screen/Result/ResultView';
import ModalView from './Screen/Result/SubViews/Modal/ModalView'

const Stack = createStackNavigator();

const Main = () => {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      {currentUser
        ?
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="Result" >
              {props => <ResultView {...props} options={{ headerShown: false }} />}
            </Stack.Screen>
            <Stack.Screen name="Detail" >
              {props => <DetilaView {...props} />}
            </Stack.Screen>
          </Stack.Group>
          <Stack.Group screenOptions={{
            gestureEnabled: true,
            presentation: "modal",
            cardStyle: { marginTop: 40, borderTopStartRadius: 20, borderTopEndRadius: 20 }
          }}>
            <Stack.Screen name="Modal" options={{ headerShown: false }}>
              {props => <ModalView {...props} />}
            </Stack.Screen>
          </Stack.Group>
        </Stack.Navigator>
        :
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginView} />
            <Stack.Screen name="Signup" component={SignupView} />
          </Stack.Group>
        </Stack.Navigator>
      }

    </NavigationContainer>
  );
};

export default App = () => {
  return (
    <View style={styles.container} >
      <AuthProvider>
        <FirebaseProvider>
          <Main />
        </FirebaseProvider>
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
