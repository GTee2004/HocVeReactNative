import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  // const [name, setName] = useState<string>("Thành");
  // const [test, setTest] = useState({
  //   name: 'hoidanit',
  //   age: 25,
  // });
  
  const [count, setCount] = useState<number>(0);

  // jsx
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: "red"}}>
        count = {count}
      </Text>
      <View>
        <Button 
        color={"red"}
        title='Increase' onPress={() => setCount(count + 1)}
        />
      </View>
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
