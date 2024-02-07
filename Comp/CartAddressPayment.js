import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from "./Card";
import Delivery from "./Delivery";
import Payment from "./Payment";
const Stack = createNativeStackNavigator();
export default ({ }) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
            initialRouteName="Card"
        >
            <Stack.Screen name="Card" component={Card} />
            <Stack.Screen name="Delivery" component={Delivery} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
}