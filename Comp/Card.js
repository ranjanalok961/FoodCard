import React from "react";
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import { useItemContext } from "../Context/CartContext";
const screen = Dimensions.get('screen')
export default ({ navigation }) => {
    const [selectedItems, setSelectedItems, getTotalCost] = useItemContext()
    return (
        <View style={styles.conatiner}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'fantasy' , color:'#000000'}}>Cart</Text>
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
                            selectedItems.map((data, index) => (
                                <View key={index} style={styles.itemContainer}>
                                    <Image source={data.cartImage} style={{ width: 80, height: 80, borderRadius: 80, }} />
                                    <View style={{
                                        flex: 0,
                                        flexDirection: 'column',
                                        width: "100%",
                                        marginRight:5
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
                                            <Text style={{ fontSize: 20, fontWeight: '300', fontFamily: 'fantasy', color:'#000000'}}>{data.cost}</Text>
                                            <Text style={{ fontSize: 20, fontWeight: '300', fontFamily: 'fantasy', color:'#000000' }}>{(parseFloat(data.cost.replace(/[^\d.]/g, ''))) * data.count}</Text>
                                            <View style={{
                                                flex: 0,
                                                flexDirection: 'row',
                                                height: 30,
                                                width: 80,
                                                backgroundColor: '#FA4A0C',
                                                borderRadius: 10, justifyContent: 'space-between',
                                                alignItems: 'center',
                                                paddingRight: 10,
                                                paddingLeft: 10
                                            }}>
                                                <TouchableOpacity onPress={() => {
                                                    const updatedItems = selectedItems.map((item) =>
                                                        item.name === data.name
                                                            ? { ...item, count: item.count - 1 }
                                                            : item
                                                    );
                                                    setSelectedItems(updatedItems);
                                                }}>
                                                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'fantasy', color: '#ffffff', }}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'fantasy', color: '#ffffff', }}>{data.count}</Text>
                                                <TouchableOpacity onPress={() => {
                                                    const updatedItems = selectedItems.map((item) =>
                                                        item.name === data.name
                                                            ? { ...item, count: item.count + 1 }
                                                            : item
                                                    );
                                                    setSelectedItems(updatedItems);
                                                }}
                                                >
                                                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'fantasy', color: '#ffffff', }}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))
                        )
                    }
                </ScrollView>
            </View>
            <View style={{
                flex: 0,
                flexDirection: 'row',
                width:"80%",
                height: 30,
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000' }}>Total</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'fantasy', color: '#ff0000' }}>{getTotalCost()}</Text>
            </View>
            <TouchableOpacity style={{
                width: "80%",
                marginTop: 20,
                backgroundColor: '#FA4A0C',
                borderRadius: 10,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onPress={() => navigation.navigate('Delivery')}
            >
                <Text style={{ fontSize: 24, fontWeight: '300', fontFamily: 'fantasy', color: '#ffffff', }}>Complete Order</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        flexDirection: 'column',
        gap:5,
        width: screen.width,
        height: screen.height,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#dcdcdc",
        justifyContent: 'flex-end'
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
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    }
})