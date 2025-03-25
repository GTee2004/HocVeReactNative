import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  // jsx
  return (
    <View style={styles.container}>
      <View>
      <Text style={{fontSize: 40, color: "blue"}}>Name: {name}</Text>
      <TextInput 
        multiline
        autoCapitalize={"words"}
        onChangeText={(value) => setName(value)}
        style={{
          borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 15
        }}
      />
      </View>
      <View>
      <Text style={{fontSize: 40, color: "violet"}}>Age: {age}</Text>
      <TextInput 
        multiline
        keyboardType='numeric'
        maxLength={2}
        onChangeText={(value) => setAge(+value)}
        style={{
          borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 15
        }}
      />
      </View>
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
