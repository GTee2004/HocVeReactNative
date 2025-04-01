import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
    reviewText: {
        fontSize: 20,
        marginBottom: 15,
        color: "blue",
        fontFamily: OPENSANS_REGULAR
    }

})
const DetailScreen = () => {
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={styles.review}>Review Detail</Text>
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>App: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Star: {route.params?.star}</Text>
            <Button title="Go Home" 
            onPress={() => {navigation.navigate("home")}} />
        </View>
    )
}

export default DetailScreen;