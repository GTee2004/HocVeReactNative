import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [students, setStudents] = useState([
    {id: 1, name: "Thành1", age: 18},
    {id: 2, name: "Thành2", age: 18},
    {id: 3, name: "Thành3", age: 19},
    {id: 4, name: "Thành4", age: 20},
    {id: 5, name: "Thành5", age: 18},
    {id: 6, name: "Thành6", age: 18},
    {id: 7, name: "Thành7", age: 18},
    {id: 8, name: "Thành8", age: 18},
    {id: 9, name: "Thành9", age: 18},
    {id: 10, name: "Thành10", age: 18},
  ])

  // jsx
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Hello World</Text>
      <FlatList
        data = {students}
        keyExtractor={item => item.id + ""}
        renderItem={({item} ) => {
          return (
            <View style={{
              padding: 20,
              backgroundColor: "pink",
              marginBottom: 30,
              marginHorizontal: 15
            }}>
              <Text style={{fontSize: 24}}>{item.name}</Text>
            </View>
          )
        }}
      />
      
      
      {/* <ScrollView>
        {students.map(item => {
          return(
            <View key={item.id} style={{
              padding: 20,
              backgroundColor: "pink",
              marginBottom: 30
            }}>
              <Text style={{fontSize: 24}}>{item.name}</Text>
            </View>
          )
        })} 
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  
});
