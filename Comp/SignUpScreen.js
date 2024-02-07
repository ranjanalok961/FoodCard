import React from "react"
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import axios from "axios"
import { useState } from "react"
export default ({ }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const storeLoginData = async () => {
        try {
            setLoading(true);
            if (!name || !email || !password) {
                Alert.alert("Please Fill All Fields");
                setLoading(false);
                return;
            }
            setLoading(false);
            const { data } = await axios.post("http://172.19.224.1:8084/api/v1/auth/register", {
                name,
                email,
                phone,
                password,
            });
            alert(data && data.message);
            console.log("Register Data==> ", { name, email, password });
        } catch (error) {
            alert(error.response.data.message);
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <View style={styles.conatiner}>
            <TextInput
                placeholder="Name"
                placeholderTextColor="gray"
                style={styles.textInput}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder="email"
                placeholderTextColor="gray"
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Phone"
                placeholderTextColor="gray"
                style={styles.textInput}
                value={phone}
                onChangeText={(text) => setPhone(text)}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                style={styles.textInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={storeLoginData}>
                <Text style={{ fontSize: 18, color: "#ffffff" }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 0,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
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
        color:'#000000'
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