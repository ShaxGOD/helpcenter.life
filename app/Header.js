import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'


const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('./assets/Fonts/Nunito-Black.ttf'),
})

export default function Header() {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.header}>
                <Text style={styles.icon}>helpcenter.life</Text>
            </SafeAreaView>
        );
    }
    else {
        return (
            <AppLoading startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        )
    }

}
const styles = StyleSheet.create({

    header: {
        paddingTop: 25,
        height: '10%',
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    icon: {
        fontSize: 24,
        paddingLeft: '1%',
        fontFamily: 'nunitoBlack',
        color: "#484848"
    },
})