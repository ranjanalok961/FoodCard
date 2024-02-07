import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Dimensions, TextInput, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useData } from "../Context/Context";
const screen = Dimensions.get('screen')
import foodData from "./Data";
import { AirbnbRating } from 'react-native-ratings';
import { useLikecontext } from "../Context/LikeContext";
import { searchData } from "../Context/SearchContext";
export default ({ navigation }) => {
    const [search, setSearch] = searchData()
    const [likeItem, setLikeItem] = useLikecontext()
    const [searchQuery, setSearchQuery] = React.useState('');
    const sign = useData()
    const foodImages = foodData.flatMap(category =>
        category.items.map(item => item.image)
    );
    let x = "<"
    let y = ">"
    const [count, setCount] = useState(0)
    const foodCategory2 = foodData.flatMap((categoryItem) => {
        const category = categoryItem.category;
        const image = categoryItem.items.length > 0 ? categoryItem.items[0].image : null;

        return {
            category: category,
            image: image,
        };
    }
    );
    const [selectedCategory, setSelectedCategory] = useState(foodCategory2[0].category)
    const [selectedFood, setSelectedFood] = useState([]);

    useEffect(() => {
        const updatedFood = foodData
            .find(category => category.category === selectedCategory)
            ?.items.flat() || [];

        setSelectedFood(updatedFood);
    }, [selectedCategory]);

    return (

        <View style={styles.conatiner}>
            <View style={styles.headerConatiner}>
                <TouchableOpacity>
                    <Image style={{ height: 20, width: 20 }} source={require('../assets/filter.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Card')}>
                    <Image style={{ height: 20, width: 20 }} source={require('../assets/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.cotainer2}>
                <Text style={styles.text1}>Explore delicious food for you</Text>
                <View style={styles.imgcont}>
                    <ImageBackground
                        source={foodImages[count]}
                        resizeMode='cover'
                        style={styles.image}
                    >
                        <TouchableOpacity style={styles.imagechnage} onPress={() => {
                            count > 0 ? (
                                setCount(() => count - 1)
                            ) : (
                                setCount(() => foodImages.length - 1)
                            )
                        }}>
                            <Text style={styles.text1}>{x}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagechnage} onPress={() => {
                            count === foodImages.length - 1 ? (
                                setCount(() => 0)
                            ) : (
                                setCount(() => count + 1)
                            )
                        }}>
                            <Text style={styles.text1}>{y}</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '300',
                    fontFamily: 'fantasy',
                    color: '#000000'
                }}>What would you like to eat?</Text>
                <View style={{ flex: 0, flexDirection: 'row', marginTop: 5 }}>
                    <View style={{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#808080',
                        backgroundColor: '#ffffff',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 1,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchResult')}>
                            <Image source={require('../assets/Vector.png')} style={styles.searchicon} />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={searchQuery}
                        placeholder="Search item ..."
                        placeholderTextColor="grey"
                        onChangeText={(text) => {
                            setSearchQuery(text)
                            setSearch(text)
                        }}
                    />
                </View>
                <View style={{
                    height: 140,
                    flex: 0,
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,
                }}>
                    <ScrollView
                        horizontal={true}
                    >
                        {foodCategory2.map((data, index) => (
                            <TouchableOpacity key={index} style={{
                                marginRight: 5,
                                padding: 10,
                            }} onPress={() => setSelectedCategory(data.category)}>
                                <View style={{
                                    height: 110.84,
                                    width: 72.83,
                                    backgroundColor: data.category === selectedCategory ? '#FE724C' : '#ffffff',
                                    borderRadius: 72.83,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    padding: 5.60,
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={data.image}
                                        style={{ width: 61.62, height: 61.62, borderRadius: 61.62 }}
                                    />
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '300',
                                        fontFamily: 'fantasy',
                                        color: data.category === selectedCategory ? '#ffffff' : '#000000',

                                    }}
                                    >
                                        {data.category}
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        horizontal={true}
                        style={{ flexDirection: 'row' }}
                    >
                        {
                            selectedFood.map((data, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 150,
                                        marginRight: 10,
                                        padding: 10,
                                        flexDirection: "column", // Set flexDirection to 'column'
                                        justifyContent: "center", // Vertically center the content
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: "100%",
                                            height: "65%",
                                        }}
                                        onPress={() => navigation.navigate('Details', { selectedItem: data })}
                                    >
                                        <View style={{
                                            flex: 0,
                                            flexDirection: 'column',
                                            width: "100%",
                                            height: "100%",
                                            alignItems: "center",
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
                                            <View style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 40,
                                                top: -60,
                                                alignItems:'center',
                                                justifyContent:'center'
                                            }}>
                                                <TouchableOpacity onPress={() => {
                                                    const newItem = { name: data.name, cost: data.cost, image: data.image };
                                                    const existingItem = likeItem ? likeItem.find((item) => item.name === newItem.name) : null;
                                                    if (existingItem) {
                                                        setLikeItem((prevSelectedItems) =>
                                                            prevSelectedItems.filter((item) => item.name !== data.name)
                                                        );
                                                    } else {
                                                        // If the item is not in the array, add it with count 1
                                                        setLikeItem((pre) => (pre ? [...pre, { ...newItem, count: 1 }] : [{ ...newItem, count: 1 }]))
                                                    }
                                                }}>
                                                    <Image source={likeItem.some((item) => item.name === data.name )?require('../assets/RedHeart.png'):require('../assets/whiteHeartt.png')} style={{ width:40 , height: 40 }} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: '200',
                                                fontFamily: 'fantasy',
                                                color: '#000000',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                top: -50
                                            }}
                                                numberOfLines={1}>{data.name}</Text>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: '200',
                                                fontFamily: 'fantasy',
                                                color: '#000000',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                top: -50
                                            }}>{data.cost}</Text>
                                            <View style={{ padding: 5, height: 20, top: -50 }}>
                                                <AirbnbRating
                                                    count={5}
                                                    reviews={['Terrible', 'Bad', 'OK', 'Good', 'Excellent']}
                                                    defaultRating={data.rating}
                                                    size={10}
                                                    reviewColor="#ffd700"
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: screen.width,
        height: screen.height,
        backgroundColor: "#8fbc8f'"
    },
    headerConatiner: {
        width: "100%",
        height: 50,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff'
    },
    cotainer2: {
        flex: 1,
        width: "100%",
        paddingLeft: 20
    },
    searchicon: {
        width: 20,
        height: 20
    },
    input: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#808080',
        width: Math.floor(screen.width - 80),
        height: 40,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        color:'#000000'
    },
    imgcont: {
        marginBottom: 10,
        marginTop: 10,
        width: Math.floor(screen.width - 40),
        height: 130,
    },
    image: {
        flex: 1,
        flexDirection: "column",
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    imagechnage: {
        width: 30,
        height: 30,
        backgroundColor: "#000000",
        opacity: 0.5,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text1: {
        color: "#000000",
        fontSize: 20,
        fontWeight: '500'
    },
    text2: {
        color: "#000000",
        fontSize: 15,
    },
    text3: {
        color: "#000000",
        fontSize: 10,
    },

})