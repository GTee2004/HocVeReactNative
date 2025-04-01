import {StyleSheet, View, Text } from "react-native";

const DetailScreen = () => {
    return(
        <View>
            <Text style={styles.review}>Detail google</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily :  OPENSANS_REGULAR
    }
})

export default DetailScreen;