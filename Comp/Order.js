import React from "react";
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import { useItemContext } from "../Context/CartContext";
import { orderData } from "../Context/OrderContext";
const screen = Dimensions.get('screen')
export default ({ navigation }) => {
    const [orderItem, setOrderItem] = orderData()
    const [selectedItems, setSelectedItems, getTotalCost] = useItemContext()
    return (
        <View style={styles.conatiner}>
            <View style={{ flex: 0, flexDirection: 'row', width: "98%", height: 20, justifyContent: 'flex-start', marginTop: 10 }}>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/chevron-left.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'fantasy' , color:'#000000' }}>Order</Text>
            <View style={{ width: "100%", height: "80%" }}>
                <ScrollView
                    style={{ width: "100%" }}
                >
                    {
                        selectedItems.length === 0 ? (
                            <Text style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: 18,
                                fontWeight: '300',
                                fontFamily: 'fantasy',
                                color: '#000000'
                            }}>No items</Text>
                        ) : (
                            orderItem.map((data, index) => (
                                <View key={index} style={styles.itemContainer}>
                                    <Image source={data.cartImage} style={{ width: 80, height: 80, borderRadius: 80, }} />
                                    <View style={{
                                        flex: 0,
                                        flexDirection: 'column',
                                        width: "100%",
                                    }}>
                                        <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000', marginTop: 10 }}>{data.name}</Text>

                                        <View style={{
                                            flex: 0,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: screen.width - 190,
                                            height: 40,
                                        }}
                                        >
                                            <Text style={{ fontSize: 20, fontWeight: '300', fontFamily: 'fantasy' , color:'#000000' }}>{data.cost}</Text>
                                            <Text style={{ fontSize: 20, fontWeight: '300', fontFamily: 'fantasy' , color:'#000000'}}>{(parseFloat(data.cost.replace(/[^\d.]/g, ''))) * data.count}</Text>
                                            <View style={{
                                                flex: 0,
                                                flexDirection: 'row',
                                                height: 30,
                                                width: 80,
                                                backgroundColor: '#FA4A0C',
                                                borderRadius: 10, justifyContent: 'space-between',
                                                alignItems: 'center',
                                                paddingRight: 10,
                                                paddingLeft: 10,
                                                justifyContent:'space-evenly'
                                            }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'fantasy', color: '#ffffff', }}>{data.count}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
        width: screen.width,
        height: screen.height,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#dcdcdc",
    },
    itemContainer: {
        marginTop: 10,
        width: screen.width - 40,
        flex: 0,
        flexDirection: 'row',
        height: 100,
        padding: 10,
        columnGap: 20,
        backgroundColor: "#ffffff",
        borderRadius: 20
    }
})