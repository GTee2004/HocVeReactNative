import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"



interface IReview {
    id: number; 
    title: string;
    star: number;
}
const HomeScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [review, setReview] = useState<IReview[]>([
        { id: 1, title: "Google", star: 5 },
        { id: 2, title: "Facebook", star: 4 },
        { id: 3, title: "Instagram", star: 3 },
        { id: 4, title: "Twitter", star: 2 },
        { id: 5, title: "LinkedIn", star: 1 },
        { id: 6, title: "Youtube", star: 5 },
        { id: 7, title: "Netflix", star: 4 },
        { id: 8, title: "Spotify", star: 3 },
        { id: 9, title: "Snapchat", star: 2 },
        { id: 10, title: "TikTok", star: 1 }
    ]);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Review List:</Text>
            
            <View>
                <FlatList
                    data={review}
                    keyExtractor={(item) => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("review-detail", item)}
                            > 
                            <View style={styles.reviewItem}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                       )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        margin: 15
    }
})

export default HomeScreen;