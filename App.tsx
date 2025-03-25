import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // jsx
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>ABC</Text>
        <Text style={styles.parent}>ABC 
          <Text style={styles.child}>Bla Bla</Text></Text>
      </View>
      <Text style={styles.hello1}>Hello World!</Text>
      <Text>Hello 2</Text>
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
  hello1: {
    color: "red",
        fontSize: 30, 
        borderWidth: 1, 
        borderColor: "black",
        padding: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center"
  },
  parent: {
    fontSize: 60,
    color: "green",
    textAlign: "center"
  },
  child: {
    fontSize: 30,
    color: "pink"
  }
});
