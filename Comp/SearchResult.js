import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import foodData from './Data';
// Assuming you have your styles defined
const screen = Dimensions.get('screen')
import { searchData } from '../Context/SearchContext';

export default ({ navigation }) => {
    const [search, setSearch] = searchData()
    const [selectedCategory, setSelectedCategory] = useState('Beverage'); // Assuming a default category

    const selectedFood = foodData.flatMap(category =>
        category.items.filter(food => food.name.toLowerCase().includes(search))
    );
    let flag = false
    return (
        <View style={styles.container}>
            <View style={{ flex: 0, flexDirection: 'row', width: "80%", height: 40, justifyContent: 'flex-start', marginTop: 10 }}>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/chevron-left.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{
                fontSize: 18,
                fontWeight: '300',
                fontFamily: 'fantasy',
                color: '#000000'
            }}>{selectedFood.length} result found</Text>
            <ScrollView>
                <View
                    style={{
                        marginTop: 100,
                        width: screen.width,
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around'
                    }}
                >
                    {selectedFood.map((data, index) => (

                        flag == false ? (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('Details', { selectedItem: data })} style={{ width: "40%", }}>
                                <View
                                    key={index}
                                    style={{
                                        flex: 0,
                                        flexDirection: 'column',
                                        width: "100%",
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        backgroundColor: '#ffffff',
                                        marginBottom: 70,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        backgroundColor: 'white',
                                        borderRadius: 20,
                                        shadowColor: '#000',
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 4,
                                        elevation: 5,
                                    }} >

                                    <Image
                                        source={data.image}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            top: -40,
                                            borderRadius: 100,
                                        }}
                                    />
                                    <Text style={{ height: 20, fontSize: 16, paddingLeft: 5, paddingRight: 5, top: -30 , color:'#000000'}}>{data.name}</Text>
                                    <Text style={{ height: 20, fontSize: 16, top: -30 , color:'#000000'}}>{data.cost}</Text>

                                </View>
                            </TouchableOpacity>
                        ) : (
                            <View style={{
                                flex: 0,
                                flexDirection: 'column',
                                width: "40%",
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                backgroundColor: '#ffffff',
                                marginTop: 100
                            }}>
                                <Image
                                    source={data.image}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        top: -40,
                                        borderRadius: 100,
                                    }}
                                />
                                <Text style={{ height: 20, fontSize: 16, paddingLeft: 5, paddingRight: 5, top: -30 }}>{data.name}</Text>
                                <Text style={{ height: 20, fontSize: 16, top: -30 }}>{data.cost}</Text>
                            </View>
                        )
                    ))}
                </View>
            </ScrollView >
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        width: screen.width,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#8fbc8f',
        alignItems: 'center'
    }
});

