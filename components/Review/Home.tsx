import {StyleSheet, View, Text } from "react-native";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: "red"
    }
})

export default HomeScreen;