import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
    'nunitoRegular': require('../assets/Fonts/Nunito-Regular.ttf'),
})

export default function NewsDetails({ route, navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    const { title } = route.params;
    const { text } = route.params;
    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.main}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.text}>{text}</Text>
                        <Image style={styles.newsPhoto} source={require('../assets/newsFullPhoto.png')} />
                        <Text style={styles.sailetText}>C заботой Ваш <Text style={styles.sailetInline} onPress={() => Linking.openURL('https://sailet.pro/')}>Sailet</Text>!</Text>
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
        fontSize: 20,
        color: "#484848",
        fontFamily: 'nunitoBlack'
    },
    text: {
        fontSize: 15,
        color: "#484848",
        opacity: 0.8,
        lineHeight: 20,
        marginTop: 20,
        fontFamily: 'nunitoRegular'
    },
    newsPhoto: {
        width: '90%',
        borderRadius: 10,
        height: 235,
        marginTop: 15
    },
    sailetText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'nunitoBlack',
        textAlign: 'center',
        color: '#484848'
    },
    sailetInline: {
        color: '#2979FF'
    },
})