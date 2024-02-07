import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { useItemContext } from "../Context/CartContext";
import { orderData } from "../Context/OrderContext";
const screen = Dimensions.get('screen')
export default ({ navigation }) => {
    const [orderItem, setOrderItem] = orderData()
    const [selectedItems, setSelectedItems, getTotalCost] = useItemContext()
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.conatiner}>
            <View style={{ flex: 0, flexDirection: 'row', width: "100%", height: 20, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/chevron-left.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('sr')}>
                    <Image source={require('../assets/heart.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{ marginStart: 100, fontSize: 30, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000' }}>Payment</Text>
            <Text style={styles.text}>Payment Method</Text>
            <View style={{
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 10,
                elevation: 5,
                width: "100%", padding: 30, backgroundColor: '#ffffff', flex: 0, flexDirection: 'column', gap: 10
            }}>
                <View style={[styles.radioRow]}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={styles.text2}>Credit/Debit Card</Text>
                </View>
                <View style={[styles.radioRow]}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={styles.text2}>UPI</Text>
                </View>
            </View>
            <Text style={styles.text}>Account details</Text>
            {
                checked === 'first' ? (
                    <View style={{ borderRadius: 20, width: "100%", padding: 30, backgroundColor: '#ffffff', flex: 0, flexDirection: 'column', gap: 10 }}>
                        <Text style={styles.text3}>Card Number</Text>
                        <TextInput
                            style={{ width: "100%", height: 30, backgroundColor: "#dcdcdc", borderRadius: 10 }}
                        />
                        <View style={[styles.row]}>
                            <View style={{ width: "40%" }}>
                                <Text style={styles.text3}>
                                    Expiry Date
                                </Text>
                                <TextInput
                                    style={{ width: "100%", height: 30, backgroundColor: "#dcdcdc", borderRadius: 10 }}
                                />
                            </View>
                            <View style={{ width: "30%" }}>
                                <Text style={styles.text3}>
                                    CVV
                                </Text>
                                <TextInput
                                    style={{ width: "100%", height: 30, backgroundColor: "#dcdcdc", borderRadius: 10 }}
                                />
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={{
                        borderRadius: 20,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 20,
                        elevation: 5,
                        width: "100%", padding: 30, backgroundColor: '#ffffff', flex: 0, flexDirection: 'column', gap: 10
                    }}>
                        <Text>Enter UPI id</Text>
                        <TextInput
                            style={{ width: "100%", height: 30, backgroundColor: "#dcdcdc", borderRadius: 10 }}
                        />
                    </View>
                )
            }
            <View style={[styles.row]}>
                <Text style={styles.text2}>Total</Text>
                <Text style={styles.text2}>{getTotalCost()}</Text>
            </View>
            <TouchableOpacity style={{
                width: "100%",
                backgroundColor: '#FA4A0C',
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onPress={() => {
                    setOrderItem((pre) => (pre ? [...pre, ...selectedItems] : [...selectedItems]))
                    // setSelectedItems([])
                }}
            >
                <Text style={{ fontSize: 24, fontWeight: '300', fontFamily: 'fantasy', color: '#ffffff', }}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        width: screen.width,
        padding: 20,
        backgroundColor: '#dcdcdc',
    },
    row: {
        width: "100%",
        flex: 0,
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 30,
        rowGap: 20
    },
    radioRow: {
        width: "100%",
        flex: 0,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        height: 30,
        rowGap: 20
    },
    checkbox: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '300',
        fontFamily: 'fantasy',
        color: '#000000'
    },
    text2: {
        fontSize: 16,
        fontWeight: '300',
        fontFamily: 'fantasy',
        color: '#000000'
    },
    text3: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'fantasy',
        color: '#000000'
    }
})