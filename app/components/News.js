import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Header from '../Header.js'
import {
    Card, CardItem
} from 'native-base';
import { Feather } from '@expo/vector-icons'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
    'nunitoRegular': require('../assets/Fonts/Nunito-Regular.ttf'),
})

const DATA = [
    {
        id: "1",
        title: "First news",
        text: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. "
    },
    {
        id: "2",
        title: "Second news that we have",
        text: "On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured. At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. "
    },
    {
        id: "3",
        title: "As u know this is third news",
        text: "еk form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relie"
    },
    {
        id: "4",
        title: "Maybe,last news for u",
        text: "ned eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will u"
    }
]

export default function News({ navigation }) {

    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [news, setNews] = useState(DATA)

    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={news}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', item)} >
                            <Card style={styles.card} >
                                <CardItem style={{ flexDirection: 'column' }}>
                                    <View style={styles.headContainer}>
                                        <Image style={styles.newsPhoto} source={require('../assets/newsphoto.png')} />
                                        <View style={styles.titleContainer}>
                                            <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rightIcon}>
                                        <Feather name="chevron-right" size={24} color="black" />
                                    </View>
                                    <View style={styles.newsTextContainer}>
                                        <Text numberOfLines={3} style={styles.newsText}>{item.text}</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    )
                    }
                />
            </SafeAreaView>

        );
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
    card: {
        height: 230,
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        marginTop: 10,
        borderTopColor: '#2979FF',
        borderTopWidth: 5,

    },

    newsPhoto: {
        width: 100,
        height: 70,
        borderRadius: 10,
    },
    headContainer: {
        flexDirection: 'row',

    },
    titleContainer: {
        width: '70%',
        paddingLeft: 15,

    },
    title: {
        fontSize: 20,
        fontFamily: 'nunitoBlack',
        color: '#484848'
    },
    rightIcon: {
        width: '105%',

        flexDirection: 'row-reverse',

    },
    newsTextContainer: {

        width: '101%'
    },
    newsText: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'nunitoRegular'
    }

})
