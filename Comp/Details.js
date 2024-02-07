import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from "react-native";

import { useItemContext } from "../Context/CartContext";
const screen = Dimensions.get('screen')
import { AirbnbRating } from "react-native-ratings";
export default ({ route, navigation }) => {
    const { selectedItem } = route.params;
    const [selectedItems, setSelectedItems] = useItemContext()
    const handleButtonClick = () => {
        const newItem = { name: selectedItem.name, cost: selectedItem.cost, cartImage: selectedItem.image };
        const existingItem = selectedItems ? selectedItems.find((item) => item.name === newItem.name) : null;
        if (existingItem) {
            console.log("Item exjiated")
            // If the item already exists, update its count
            setSelectedItems((prevSelectedItems) =>
                prevSelectedItems.map((Item) =>
                    Item.name === newItem.name
                        ? { ...Item, count: Item.count + 1 }
                        : Item
                )
            );
        } else {
            // If the item is not in the array, add it with count 1
            setSelectedItems((pre) => (pre ? [...pre, { ...newItem, count: 1 }] : [{ ...newItem, count: 1 }]))
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0, flexDirection: 'row', width: screen.width - 40, height: 20, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/chevron-left.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('sr')}>
                    <Image source={require('../assets/heart.png')} />
                </TouchableOpacity>
            </View>
            <Image source={selectedItem.image} style={{ width: Math.floor(3 * screen.width / 5), height: Math.floor(3 * screen.width / 5), borderRadius: Math.floor(3 * screen.width / 5) }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000' }}>{selectedItem.name}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000' }}>{selectedItem.cost}</Text>
            <View style={{
                width: Math.floor(screen.width - 40),
                height: 30,
                paddingLeft: 30,
                paddingRight: 30,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <AirbnbRating
                    count={5}
                    reviews={['Terrible', 'Bad', 'OK', 'Good', 'Excellent']}
                    defaultRating={4}
                    size={10}
                    reviewColor="#ffd700"
                />
                <TouchableOpacity style={{
                    width: 'auto',
                    borderWidth: 0,
                    borderRadius: 10,
                    borderColor: '#a9a9a9',
                    padding: 5
                }}
                    onPress={() => navigation.navigate('Reviews', { reviewlist: selectedItem.reviews })}
                >
                    <Text style={{ fontSize: 15, fontWeight: '200', fontFamily: 'fantasy', color: '#000000' }}>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', width: Math.floor(screen.width - 40), justifyContent: 'flex-end', rowGap: 10, padding: 30, alignItems: 'center' }}>
                <Text style={{ width: Math.floor(screen.width - 100), fontSize: 22, fontWeight: '200', fontFamily: 'Serif', color: '#000000' }} numberOfLines={1}>
                    Delivery info
                </Text>
                <Text style={{ width: Math.floor(screen.width - 100), fontSize: 15, fontWeight: '200', fontFamily: 'Serif', color: '#000000' }} numberOfLines={2}>
                    Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
                </Text>
                <Text style={{ width: Math.floor(screen.width - 100), fontSize: 22, fontWeight: '200', fontFamily: 'Serif', color: '#000000' }} numberOfLines={1}>
                    Return policy
                </Text>
                <Text style={{ width: Math.floor(screen.width - 100), fontSize: 15, fontWeight: '200', fontFamily: 'Serif', color: '#000000' }} numberOfLines={4}>
                    All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.
                </Text>
                <TouchableOpacity style={{ width: Math.floor(3 * screen.width / 5), height: 40, backgroundColor: "#FA4A0C", justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={handleButtonClick}>
                    <Text style={{color:'white' , fontFamily:'Serif'}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: screen.width,
        padding: 20,
        alignItems: 'center',
        rowGap: 10
    },
});