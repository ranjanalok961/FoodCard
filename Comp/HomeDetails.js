import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Details from "./Details";
import SearchResult from "./SearchResult";
import Reviews from "./Reviews";
;
const Stack = createNativeStackNavigator();
export default ({ }) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
            <Stack.Screen name="Reviews" component={Reviews} />
        </Stack.Navigator>
    )
}