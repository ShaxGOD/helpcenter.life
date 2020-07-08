import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
    'nunitoRegular': require('../assets/Fonts/Nunito-Regular.ttf'),
    'nunitoSemiBold': require('../assets/Fonts/Nunito-SemiBold.ttf'),
})

export default function RequestsDetails({ route, navigation }) {

    const [fontsLoaded, setFontsLoaded] = useState(false)
    const { name, author, text, region, author_phone, contact_types } = route.params;
    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.main}>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.nameCity}>
                            <Text style={styles.name}>{author}</Text>
                            <View style={styles.insideCard}>
                                <Text style={styles.cityName}>{region.name}</Text>
                            </View>
                        </View>
                        <Text style={styles.mainText}>{text}</Text>
                        <View style={styles.referenceView}>
                            <Text style={styles.referenceText}>Связаться по: </Text>
                            <Feather style={{ marginLeft: 15 }} onPress={() => { Linking.openURL(`tel:${author_phone.number}`) }} name="phone-outgoing" size={33} color="#2979FF" />
                            {contact_types.map((contact, index) => < MaterialCommunityIcons style={{ marginLeft: 15 }} key={`${contact.href}_${index}`} onPress={() => { Linking.openURL(contact.href) }} name={contact.name} size={38} color="#2979FF" />)}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        return (
            <AppLoading startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
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
    main: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 15,
        alignItems: "center"
    },
    title: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 24,
        color: "#484848",
        fontFamily: 'nunitoBlack'
    },
    name: {
        fontSize: 18,
        color: '#484848',
        fontFamily: 'nunitoSemiBold'
    },
    nameCity: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24,
        width: '93%',
    },
    insideCard: {
        backgroundColor: '#F2F2F2',
        borderRadius: 25,
        width: 130,
        height: 'auto',
        alignItems: "center"
    },
    cityName: {
        fontSize: 16,
        color: '#484848',
        opacity: 0.7,
        textAlign: 'center',
        paddingTop: 4,
    },
    mainText: {
        fontSize: 18,
        color: '#484848',
        opacity: 0.7,
        lineHeight: 20,
        fontFamily: 'nunitoRegular',
        marginTop: 20,
        paddingTop: 15
    },
    animate: {
        paddingTop: '50%'
    },
    referenceView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '93%',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 15,
        alignItems: 'center'

    },
    referenceText: {
        color: '#484848',
        fontSize: 20,
        fontFamily: 'nunitoSemiBold'
    },
})