import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View, Text, Touchable, TouchableOpacity, Modal, TextInput } from "react-native";
const screen = Dimensions.get('screen')
import { useData } from "../Context/Context";
import { useProfile } from "../Context/ProfileContext";
export default ({ navigation }) => {
    const [pname, psetName, pemail, psetEmail, pphone, psetPhone, paddress, psetAddress] = useProfile();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [address, setaddress] = useState('')
    const [sign, setSign] = useData()
    return (
        <View style={styles.conatiner}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: '200',
                    fontFamily: 'fantasy',
                    color: '#000000',
                }}
            >
                My Profile
            </Text>
            <View style={{
                marginTop: 20,
                width: screen.width - 40,
                height: 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '200',
                        fontFamily: 'fantasy',
                        color: '#000000',
                    }}
                >
                    Personal details
                </Text>
                <TouchableOpacity onPress={() => setPopupVisible(true)}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '200',
                            fontFamily: 'fantasy',
                            color: '#000000',
                        }}
                    >
                        Chnage
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isPopupVisible}
            >
                <View style={styles.centeredView}>
                    <View
                        style={{ width: "90%", height: 15, flex: 0, flexDirection: 'row', justifyContent: 'flex-end' }}
                    >
                        <TouchableOpacity onPress={() => setPopupVisible(false)}>
                            <Image style={{ width: 15, height: 15}} source={require('../assets/2976286.png')} />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="Address ..."
                        placeholderTextColor='grey'
                        style={styles.textInput}
                        value={address}
                        onChangeText={(text) => {
                            psetAddress(text)
                            setaddress(text)
                        }}
                    />
                    <TouchableOpacity style={[styles.buttonClose, styles.button]} onPress={() => setPopupVisible(false)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={{
                width: screen.width - 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                padding: 10,
                height: 150,
                borderRadius: 20
            }}>
                <View style={{
                    width: "35%",
                    flex: 0,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../assets/myself.jpg')} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </View>
                <View style={{
                    width: "60%",
                    flex: 0,
                    flexDirection: 'column',
                    padding: 5,
                    gap: 5
                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '200',
                            fontFamily: 'fantasy',
                            color: '#000000',
                        }}
                    >
                        {pname}
                    </Text>
                    <View style={{ width: "100%", height: 1, backgroundColor: '#d0d0d0' }}></View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '200',
                            fontFamily: 'fantasy',
                            color: '#000000',
                        }}
                    >
                        {pemail}
                    </Text>
                    <View style={{ width: "100%", height: 1, backgroundColor: '#d0d0d0' }}></View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '200',
                            fontFamily: 'fantasy',
                            color: '#000000',
                        }}
                    >
                        {pphone}
                    </Text>
                    <View style={{ width: "100%", height: 1, backgroundColor: '#d0d0d0' }}></View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '200',
                            fontFamily: 'fantasy',
                            color: '#000000',
                        }}
                    >
                        {paddress}
                    </Text>
                </View>
            </View>
            <View style={{
                width: screen.width - 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                height: 60,
                borderRadius: 20,
                marginTop: 15,
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '200',
                        fontFamily: 'fantasy',
                        color: '#000000',
                    }}
                >
                    Orders
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                    <Image source={require('../assets/Right.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={{
                width: screen.width - 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                height: 60,
                borderRadius: 20,
                marginTop: 15,
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '200',
                        fontFamily: 'fantasy',
                        color: '#000000',
                    }}
                >
                    Pending reviews
                </Text>
                <Image source={require('../assets/Right.png')} style={{ width: 30, height: 30 }} />
            </View>
            <View style={{
                width: screen.width - 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                height: 60,
                borderRadius: 20,
                marginTop: 15,
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '200',
                        fontFamily: 'fantasy',
                        color: '#000000',
                    }}
                >
                    Help
                </Text>
                <Image source={require('../assets/Right.png')} style={{ width: 30, height: 30 }} />
            </View>
            <View style={{
                width: screen.width - 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                height: 60,
                borderRadius: 20,
                marginTop: 15,
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '200',
                        fontFamily: 'fantasy',
                        color: '#000000',
                    }}
                >
                    Log Out
                </Text>
                <TouchableOpacity onPress={() => setSign(false)}>
                    <Image source={require('../assets/Right.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        padding: 20,
        width: screen.width,
        backgroundColor: "#d0d0d0",
        flexDirection: 'column',
        gap: 10,
        position:'relative'
    },
    centeredView: {
        flex: 0,
        height: 150,
        width: screen.width - 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        bottom: 0,
        marginLeft: 30,
        position:'absolute',
        bottom:50
    },
    textInput: {
        height: 40,
        width: '90%',
        margin: 10,
        backgroundColor: '#ffffff',
        borderColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        color:'#000000'
    },
    button: {
        width:"50%",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems:'center',
    },
    buttonOpen: {
        backgroundColor: '#FA4A0C',
    },
    buttonClose: {
        backgroundColor: '#FA4A0C',
    },
})