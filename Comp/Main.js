import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";
const screen = Dimensions.get('screen')
export default ({ navigation }) => {
    return (
        <View style={styles.conatiner}>
            <ImageBackground
                source={require('../assets/MainPage.png')}
                resizeMode='cover'
                style={styles.BackImgCon}
            >
                <View style={styles.titleCon}> 
                    <Text style={{ color: '#ffffff', fontWeight:'bold', fontSize:30 , fontFamily:'fantasy' }}>Food For</Text>
                    <Text style={{ color: '#ffffff', fontWeight:'bold' ,fontSize:30 , fontFamily:'fantasy' }}>Everyone</Text>
                </View>
                <View style={styles.iconCon}>
                    <Image source={require('../assets/icon2.jpeg')} style={{height:300 , width:500 , opacity:0.4 , transform: [{skewY: '45deg'}], borderTopLeftRadius:200 , borderBottomRightRadius:100 }}/>
                </View>
                <View style={styles.buttonCon}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#FA4A0C', fontWeight:'bold' }} >Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: screen.width,
        height: screen.height,
    },
    BackImgCon: {
        width: "100%",
        height: "100%",
    },
    titleCon: {
        width: "100%",
        height: "40%",
        justifyContent:'center',
        alignItems:'center'
    },
    iconCon: {
        width: "100%",
        height: "40%"
    },
    buttonCon: {
        width: "100%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        color: '#ffffff'
    },
    text2: {
        fontSize: 20,
        color: '#000000'
    },
    button: {
        width: '60%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ffffff',
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
})