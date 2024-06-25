// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './Screen/Login/LoginView';
import ResultView from './Screen/Result/ResultView';
import ResultViewModel from "./Screen/Result/ResultViewModel"

export default function App() {
  const resultViewModel = ResultViewModel()
  return (
    <View style={styles.container}>
      <ResultView viewModel={resultViewModel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
