import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const App = () => {
  // initialisation
  //State
  //Handlers
  //View
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar styl ="auto" />
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

export default App;
