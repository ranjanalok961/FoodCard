import React from "react";
import { Image, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDetails from "./HomeDetails";
import Main from "./Main";
import Login from "./Login";
import CartAddressPayment from "./CartAddressPayment";
import LikeItemScreen from "./LikeItemScreen";
import Profile from "./Profile";
import { useData } from "../Context/Context";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { useItemContext } from "../Context/CartContext";
export default ({ }) => {
  const [selectedItems, setSelectedItems, getTotalCost,TotalCount] = useItemContext()
  const [sign, setSign] = useData()
  return (
    <NavigationContainer>
      {sign ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Tab.Screen
            
            name="HomeDetails"
            component={HomeDetails}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require('../assets/heroicons-solid_home.png')}
                  style={{ width: 40, height: 40 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="LikeItemScreen"
            component={LikeItemScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require('../assets/heart.png')}
                  style={{ width: 25, height: 25 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require('../assets/user.png')}
                  style={{ width: 25, height: 25}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CartAddressPayment"
            component={CartAddressPayment}
            options={{
              tabBarIcon: ({ focused }) => (
                <ImageBackground source={require('../assets/shopping-cart.png')} resizeMode='cover' style={{ width: 30, height: 25 , justifyContent:'center' ,alignItems:'center'}}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'fantasy' , color:'#ff0000', top:-10 , zIndex:999 }}>{TotalCount()}</Text>
                </ImageBackground>
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};