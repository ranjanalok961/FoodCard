import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Dimensions, TextInput, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
const Tab = createBottomTabNavigator();
const screen = Dimensions.get('screen')
export default ({ navigation }) => {
    const [hover, setHover] = useState(false)
    const [screen, setScreen] = useState(true)
    return (
        <View style={styles.conatiner}>
            <View style={styles.cont}>
                <Image source={require('../assets/Group3.png')} style={{ height: 200, width: 200 }} />
                <View style={styles.contt2}>
                    <TouchableOpacity onPress={() => {
                        setScreen(true)
                        setHover(false)
                    }} style={{ borderBottomWidth: !hover?3:0, borderColor: "#ff0000"}}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setScreen(false)
                        setHover(true)
                    }} style={{ borderBottomWidth: hover?4:0, borderColor: "#ff0000"}}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>Sign-Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cont2}>
                {
                    screen ? (
                        <LoginScreen />
                    ) : (
                        <SignUpScreen />
                    )
                }
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: screen.width,
        height: screen.height,
        backgroundColor: 'white'
    },
    cont: {
        width: "100%",
        height: "40%",
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    contt2: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        height: 30,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },
    cont2: {
        width: "100%",
        height: "60%",
        backgroundColor:'#F6F6F9',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    image: {
        flex: 1
    },
    text: {
        fontSize: 20,
        textAlign: "left",
        color: '#ffffff'
    },
    text2: {
        fontSize: 20,
        color: '#000000'
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#808080'
    },
    button: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
})