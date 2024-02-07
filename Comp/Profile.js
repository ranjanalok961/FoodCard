import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./ProfileScreen";
import Order from "./Order";
const Stack = createNativeStackNavigator();
export default ({ }) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
            initialRouteName="ProfileScreen"
        >
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    )
}