import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useItemContext } from "../Context/CartContext";
const screen = Dimensions.get('screen')

export default ({ navigation }) => {
    const [selectedItems, setSelectedItems, getTotalCost] = useItemContext()
    return (
        <View style={styles.conatiner}>
            <View style={{ flex: 0, flexDirection: 'row', width: "100%", height: 40, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000' }}>Delivery</Text>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/chevron-left.png')} />
                </TouchableOpacity>
            </View>
            <View style={[styles.row]}>
                <Text style={styles.text2}>Address details</Text>
                <TouchableOpacity>
                    <Text style={styles.text2}>chnage</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.addressBox}>
                <Text style={styles.text3}>Ranjan Alok</Text>
                <View style={{ width: "100%", backgroundColor: '#dcdcdc', height: 1 }} />
                <Text style={styles.text3}> LOVELY PROFESSIONAL UNIVERSITY, JALANDHAR-DELHI, G.T. ROAD, PHAGWARA, PUNJAB (INDIA) -144411.</Text>
                <View style={{ width: "100%", backgroundColor: '#dcdcdc', height: 1 }} />
                <Text style={styles.text3}>1800 3001 1800</Text>
            </View>
            <View style={[styles.row]}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>{getTotalCost()}</Text>
            </View>
            <TouchableOpacity style={{
                width: "100%",
                backgroundColor: '#FA4A0C',
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onPress={() => navigation.navigate('Payment')}
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
        backgroundColor: '#dcdcdc'
    },
    row: {
        width: "100%",
        flex: 0,
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 30,
        rowGap: 20,
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
    },
    addressBox: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 20, width: "100%", padding: 30, backgroundColor: '#ffffff', flex: 0, flexDirection: 'column', gap: 10
    }
})