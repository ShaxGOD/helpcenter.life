import React from 'react'
import { StyleSheet, Text, View, Image, Linking, SafeAreaView } from 'react-native'
import Header from '../Header.js'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
    'nunitoRegular': require('../assets/Fonts/Nunito-Regular.ttf'),
})
export default class AboutProject extends React.Component {
    constructor() {
        super()
        this.state = {
            fontsLoaded: false,
        }
    }

    render() {
        if (this.state.fontsLoaded) {
            return (
                <SafeAreaView style={styles.container}>
                    <Header />
                    <View style={styles.main}>
                        <Text style={styles.mainText}>Центр взаимопомощи</Text>
                        <Text style={styles.supportText}>Некоммерческий проект для людей,
                        которые могут помочь или кому необходима помощь в этот непростой период.
                        Мы не размещаем рекламу, платные услуги, лживые обращения и прочие объявления,
                        которые не соответствуют общественным нормам морали. Если вам необходима
                        материальная помощь, у вас нет продуктов, нужно что-то привезти,
                        вас выселяют с квартиры или вы можете помочь это решить, оставляйте заявку в приложении
                 и мы с радостью поможем.</Text>
                        <Image style={styles.lotusImage} source={require("../assets/ImageLotus.png")} />
                        <Text style={styles.sailetText}>C заботой Ваш <Text style={styles.sailetInline} onPress={() => Linking.openURL('https://sailet.pro/')}>Sailet</Text>!</Text>
                    </View>
                </SafeAreaView>
            );
        }
        else {
            return (
                <AppLoading
                    startAsync={getFonts}
                    onFinish={() => this.setState({ fontsLoaded: true })}
                />
            )
        }

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
        marginTop: 7,
        paddingTop: 10,
        paddingBottom: 10,
        height: '87%',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: 'column',

    },
    mainText: {
        textAlign: 'center',
        fontFamily: 'nunitoBlack',
        fontSize: 20,
        color: "#484848",
        paddingTop: 5


    },
    supportText: {
        fontSize: 13,
        color: "#484848",
        opacity: 0.7,
        paddingRight: 10,
        paddingLeft: 20,
        lineHeight: 19,
        fontFamily: 'nunitoRegular'

    },
    lotusImage: {

        height: 180

    },
    sailetText: {
        fontSize: 20,
        fontFamily: 'nunitoBlack',
        textAlign: 'center',
        color: '#484848'
    },
    sailetInline: {
        color: '#2979FF'
    },

});

