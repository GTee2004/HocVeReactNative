import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ITodo {
  id: number;
  name: string
}
export default function App() {
  
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);


  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo(
    [...listTodo, 
      {id: randomInteger(2, 2000000), name: todo}
    ]);
    setTodo("")  
  }

  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter(item => item.id !== id)
    setListTodo(newTodos)
  }
  // jsx
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>ToDo APP</Text>

      {/* form */}
      <View style={styles.body}>
        <TextInput
        value={todo}
        onChangeText={(value) => setTodo(value)}
        style={styles.todoinput}/>
        <Button 
        onPress={handleAddTodo}
        title='Add todo'/>
        
      </View>

      {/* list todo */}
      <View style={styles.body}>
        <FlatList
        data = {listTodo}
        keyExtractor={item => item.id + ""}
        renderItem={({item}) => {
          return(
            <Pressable
            style={(({pressed}) => ({opacity: pressed ? 0.5 : 1}))}
            onPress={() => deleteTodo(item.id)}>
              <Text style={styles.todoItem}>{item.name}</Text>
            </Pressable>
          )
        }}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,

  },
  header: {
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "orange",
    fontSize: 45
  },

  todoinput: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    padding: 15,
    marginHorizontal: 15,
    margin: 15
  },
  
  body: {
    marginBottom: 20,
    paddingHorizontal: 10
  },
   todoItem: {
    marginBottom: 15,
    borderWidth: 1,
    fontSize: 20,
    borderStyle: "dashed",
    padding: 10
   }
});
