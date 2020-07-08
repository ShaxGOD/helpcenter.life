import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Linking, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import Header from '../Header.js'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, CardItem } from 'native-base'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { TouchableOpacity } from 'react-native-gesture-handler';
// http://localhost:3000/cards
const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
    'nunitoRegular': require('../assets/Fonts/Nunito-Regular.ttf'),
    'nunitoSemiBold': require('../assets/Fonts/Nunito-SemiBold.ttf'),
})
const requestURL = "http://helpcenter.greenhub.kz/kaz/ru/api/v1/materials/list?pageSize=max"

export default function Requests({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        fetch(requestURL, { signal: signal })
            .then((response) => response.json())
            .then((json) => {
                setData(json.content)

            })
            .catch((error) => console.error(error));
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('RequestsDetails', item)}>
                            <Card style={styles.card}>
                                <CardItem>
                                    <View style={styles.cardColumn}>
                                        <View style={{ width: '90%' }}>
                                            <Text style={styles.titleOfCard} numberOfLines={2}>{item.name}</Text>
                                        </View>
                                        <View style={styles.cardMain}>
                                            <Text style={styles.cardName}>{item.author}</Text>
                                            <View style={styles.insideCard}>
                                                <Text style={styles.cityName}>{item.region.name}</Text>
                                            </View>
                                            <Feather name="chevron-right" size={24} color="black" />
                                        </View>
                                        <View style={styles.requestTextCard}>
                                            <Text style={styles.requestText} numberOfLines={4}>{item.text}</Text>
                                        </View>
                                        <View style={styles.referenceView}>
                                            <Text style={styles.referenceText}>Связаться по: </Text>
                                            <Feather style={{ marginLeft: 17 }} onPress={() => { Linking.openURL(`tel:${item.author_phone.number}`) }} name="phone-outgoing" size={30} color="#2979FF" />
                                            {item.contact_types.map((contact, index) => <MaterialCommunityIcons style={{ marginLeft: 20 }} key={`${contact.href}_${index}`} onPress={() => { Linking.openURL(contact.href) }} name={contact.name} size={35} color="#2979FF" />)}
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    )
                    }
                />
            </SafeAreaView >
        );
    } else {
        return (
            <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: '50%' }} >
                <AppLoading
                    startAsync={getFonts}
                    onFinish={() => setFontsLoaded(true)}
                />
            </ActivityIndicator>


        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f7fa',
        paddingLeft: '3.5%',
        paddingRight: '3.5%',
    },
    titleOfCard: {
        fontSize: 20,
        color: '#484848',
        fontFamily: 'nunitoBlack',
    },
    card: {
        height: 264,
        borderRadius: 25,
        paddingTop: 10,
        backgroundColor: '#FFFFFF',
        borderTopColor: '#E53935',
        borderTopWidth: 6,
        marginTop: 15,
        paddingLeft: 3,
        paddingRight: 3

    },
    cardMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '93%',
    },
    cardName: {
        fontSize: 14,
        color: '#484848',
        fontFamily: 'nunitoSemiBold'
    },
    insideCard: {
        backgroundColor: '#F2F2F2',
        borderRadius: 25,
        width: 100,
        height: 'auto',
    },
    cityName: {
        fontSize: 12,
        color: '#484848',
        opacity: 0.7,
        textAlign: 'center',
        paddingTop: 4,
    },
    requestTextCard: {
        width: '90%',
        height: 65,
        marginTop: 10,

    },
    requestText: {
        fontSize: 12,
        color: '#484848',
        opacity: 0.7,
        lineHeight: 16,
        fontFamily: 'nunitoRegular'

    },
    referenceView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
        marginTop: 10,

        alignItems: "center"

    },
    referenceText: {
        color: '#484848',
        fontSize: 14,
        fontFamily: 'nunitoSemiBold'
    },
    cardColumn: {
        flexDirection: 'column'
    },
    animate: {
        paddingTop: '50%'
    }


});
