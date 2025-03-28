import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable,
   ScrollView, StyleSheet, Text, TextInput,
    TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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
    if(!todo) {
      Alert.alert("Lỗi input Todo", "Todo không được để trống",
        [
          // {
          //   text: 'Cancel',
          //   onPress: () => console.log('Cancel Pressed'),
          //   style: 'cancel',
          // },
          {
            text: 'Xác nhận',
            onPress: () => console.log('OK Pressed'),
          }
        ]
      )
      return;
    }
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>ToDo APP</Text>

      {/* form */}
      <View style={styles.form}>
        <TextInput
        value={todo}
        onChangeText={(value) => setTodo(value)}
        style={styles.todoinput}/>
        <Button 
        onPress={handleAddTodo}
        title='Add todo'/>
        
      </View>
 
      {/* list todo */}
      <View style={styles.todo}>
        <FlatList
        data = {listTodo}
        keyExtractor={item => item.id + ""}
        renderItem={({item}) => {
          return(
            <Pressable
            style={(({pressed}) => ({opacity: pressed ? 0.5 : 1}))}
            onPress={() => deleteTodo(item.id)}>
              <View style={styles.grouptodo}>
                <Text style={styles.todoItem}>{item.name}</Text>
                <AntDesign name="close" size={24} color="black" />
              </View>
            </Pressable>
          )
        }}
        />

      </View>

    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // borderWidth: 1,
    // borderColor: "red"

  },
  header: {
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "orange",
    fontSize: 45
  },
  form: {
    // flex: 2
    marginBottom: 20
  },
  todo: {
    flex: 1
  },
  todoinput: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    padding: 15,
    marginHorizontal: 15,
    margin: 15
  },
  
  // body: {
  //   marginBottom: 20,
  //   paddingHorizontal: 10,
  //   flex: 1
  // },
   todoItem: {
    fontSize: 20,
    // padding: 10
   },
   grouptodo: {
    flexDirection: "row",
    alignItems: 'center',
    borderStyle: "dashed",
    borderWidth: 1,
    marginBottom: 15,
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 10
   }
});
