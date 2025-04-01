import {StyleSheet, View, Text } from "react-native";

const AboutScreen = () => {
    return(
        <View style={styles.container}>
            <Text>About google</Text>
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

export default AboutScreen;