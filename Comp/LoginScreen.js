import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import { useData } from "../Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useProfile } from "../Context/ProfileContext";
export default ({ }) => {
    const {pname, psetName, pemail, psetEmail, pphone, psetPhone, paddress, psetAddress} = useProfile()
    const [sign, setSign] = useData()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const LoginData = async () => {
        try {
            setLoading(true);
            if (!email || !password) {
                Alert.alert("Please Fill All Fields");
                setLoading(false);
                return;
            }
            setLoading(false);
            const { data } = await axios.post("http://172.19.224.1:8084/api/v1/auth/login", {
                email,
                password,
            });
            await AsyncStorage.setItem('@auth',JSON.stringify(data));
            alert(data && data.message);
            setSign(true);
            console.log("Register Data==> ", { email, password });
        } catch (error) {
            alert(error.response.data.message);
            setLoading(false);
            console.log(error);
            return false;
        }
    };
    // const getLocalStorage = async () => {
    //     let data = await AsyncStorage.getItem('@auth')
    //     console.log("Local Storage ===> ",data)
    // }
    // getLocalStorage();
    return (
        <View style={styles.conatiner}>
            <TextInput
                placeholder="Email"
                placeholderTextColor="gray" 
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Text>Password</Text>
            <TextInput
                placeholder="Password"
                placeholderTextColor="gray" 
                style={styles.textInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={LoginData}>
                <Text style={{ fontSize: 18, color: "#ffffff" }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 0,
        flexDirection:'column',
        gap:10,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: '70%',
        margin: 10,
        borderColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        fontSize: 20,
        borderBottomWidth:1,
        color: "#000000"
    },
    Button: {
        width: '70%',
        height: 50,
        backgroundColor: '#FA4A0C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})