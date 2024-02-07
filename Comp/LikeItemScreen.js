import React from "react";
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import { useLikecontext } from "../Context/LikeContext";
const screen = Dimensions.get('screen')
export default ({ navigation }) => {
    const [likeItem , setLikeItem] = useLikecontext()
    return (
        <View style={styles.conatiner}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'fantasy',color:'#000000' }}>Liked Item</Text>
            <View style={{ width: "100%", height: "80%" }}>
                <ScrollView
                    style={{ width: "100%" }}
                >
                    {
                        likeItem.length === 0 ? (
                            <Text style={{
                                width:'100%',
                                textAlign:'center',
                                fontSize: 18,
                                fontWeight: '300',
                                fontFamily: 'fantasy',
                                color: '#000000'
                            }}>No items</Text>
                        ) : (
                            likeItem.map((data, index) => (
                                <View key={index} style={styles.itemContainer}>
                                    <Image source={data.image} style={{ width: 80, height: 80, borderRadius: 80, }} />
                                    <View style={{
                                        flex: 0,
                                        flexDirection: 'column',
                                        width: "100%",
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'fantasy', color: '#000000', marginTop: 10 }}>{data.name}</Text>
                                        <View style={{
                                            flex: 0,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: screen.width - 190,
                                            height: 40,
                                        }}
                                        >
                                            <Text style={{color:'#000000'}}>{data.cost}</Text>
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
        gap: 10,
        width: screen.width,
        height: screen.height,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#dcdcdc",
        justifyContent: 'flex-end',
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