import React, { isValidElement, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Pressable, TextInput } from "react-native";

import { AirbnbRating } from "react-native-ratings";
const screen = Dimensions.get('screen')
import foodData from "./Data";
import { useProfile } from "../Context/ProfileContext";
export default ({ route, navigation }) => {
    const [pname, psetName, pemail, psetEmail, pphone, psetPhone, paddress, psetAddress] = useProfile();
    const { reviewlist } = route.params;
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        // Handle the selected rating value
    };
    const reviewSubmit = ({ }) => {
        let newReview = { rating: rating, reviewBy: pname, review: review };
        // Insert the new review object into the reviews array
        reviewlist.push(newReview);
        setPopupVisible(!isValidElement)
        setReview('')
    }
    return (
        <View style={styles.container}>
            <View style={{
                width: screen.width,
                height: 40,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/chevron-left.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPopupVisible(!isPopupVisible)}>
                    <Text style={{color:'#000000'}}>Add review</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isPopupVisible}
            >
                <View style={styles.centeredView}>
                    <AirbnbRating
                        count={5}
                        reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
                        defaultRating={0}
                        size={20}
                        onFinishRating={handleRating}
                    />
                    <TextInput
                        placeholder="Your reviews"
                        placeholderTextColor='grey'
                        style={styles.textInput}
                        value={review}
                        onChangeText={(text) => setReview(text)}
                    />
                    <TouchableOpacity style={[styles.buttonClose, styles.button]} onPress={reviewSubmit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Text>Reviews</Text>
            <View
                style={{ flex: 1, flexDirection: 'column', width: screen.width, padding: 10 }}
            >
                <ScrollView
                    style={{ flex: 1, flexDirection: 'column', width: screen.width }}
                >
                    {
                        reviewlist.map((data, index) => (
                            <View
                                key={index}
                                style={{
                                    flex: 0,
                                    flexDirection: 'row',
                                    width: screen.width - 20,
                                    marginTop: 20,
                                    padding: 10,
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
                                }}
                            >
                                <View
                                    style={{ flex: 0, flexDirection: 'column', width: '40%', alignItems: 'center', justifyContent: 'flex-start' }}
                                >
                                    <Text style={{ height: 20, fontSize: 18, fontWeight: '500', fontFamily: 'fantasy', color: '#000000' }}>{data.reviewBy}</Text>
                                    <View style={{
                                        width: "100%",
                                        height: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <AirbnbRating
                                            count={5}
                                            reviews={['Terrible', 'Bad', 'OK', 'Good', 'Excellent']}
                                            defaultRating={4}
                                            size={10}
                                            reviewColor="#ffd700"
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{ flex: 0, flexDirection: 'column', width: '60%', gap: 10, marginLeft: 10 }}
                                >
                                    <Text style={{ fontSize: 15, fontWeight: '200', fontFamily: 'fantasy', color: '#000000' }} >{data.review}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: screen.width,
        alignItems: 'center',
        position: 'relative'
    },
    header: {

    },
    centeredView: {
        flex: 0,
        height: 150,
        width: screen.width - 60,
        justifyContent: 'center',
        alignItems: 'center',
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
        bottom: 0,
        marginLeft: 30,
        position: 'absolute',
        bottom: 50
    },
    textInput: {
        height: 40,
        width: '70%',
        margin: 10,
        backgroundColor: '#ffffff',
        borderColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        color:'#000000'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})