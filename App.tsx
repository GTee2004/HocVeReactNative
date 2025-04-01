import { Text, View } from "react-native"
import HomeScreen from "./components/Review/Home";
import DetailScreen from "./components/Review/Detail";
import AboutScreen from "./components/Review/About";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./utils/const";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{ title: 'Trang Chủ' }}
                />
                <Stack.Screen name="review-detail"
                    component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;