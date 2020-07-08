import React from 'react';
import { StyleSheet, Text, View, TextInput, Linking } from 'react-native';
import Header from '../Header.js'
import FlatButton from '../buttonOnSubmit.js'
import { sendEmail } from './send-email';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
})

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userPhone: '',
            userProblem: '',
            fontsLoaded: false,
        };
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Header />
                    <View style={styles.main}>
                        <Text style={styles.problemText}>Если у вас есть какие-либо вопросы, пожалуйста, заполните эту контактную форму, и мы свяжемся с вами в ближайшее время.</Text>
                        <View style={styles.inputView}>

                            <TextInput placeholder="Имя" placeholderTextColor="#8291b9" onChangeText={userName => this.setState({ userName })} style={styles.inputName} />
                            <TextInput placeholder="Email" placeholderTextColor="#8291b9" onChangeText={userEmail => this.setState({ userEmail })} keyboardType="email-address" style={styles.inputName} />

                            <TextInput placeholder="Телефон" placeholderTextColor="#8291b9" onChangeText={userPhone => this.setState({ userPhone })} keyboardType='numeric' style={styles.inputName} />

                            <TextInput placeholderTextColor="#8291b9" onChangeText={userProblem => this.setState({ userProblem })} placeholder="Описание проблемы" multiline style={styles.inputProblem} />
                            <FlatButton text='Отправить' onPress={() => sendEmail(
                                this.state.userEmail,
                                'belyakov@sailet.pro',
                                'Feedback from Helpcenter.life',
                                ` Имя: ${this.state.userName} 
                            Номер телефона : ${this.state.userPhone} 
                            Почта : ${this.state.userEmail} 
                            Отзыв : ${this.state.userProblem}`,
                                { cc: '190103454@stu.sdu.edu.kz' }
                            ).then(() => {
                                alert('Ваше сообщение доставлено!');
                            })} />
                        </View>
                    </View>
                </View>
            );
        } else {
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
        height: '87%',
        marginTop: 7,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 15,
        alignItems: 'center'
    },

    inputName: {
        marginTop: 20,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        height: 40,
        fontSize: 16
    },
    inputProblem: {
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 20,
        height: 70,
        paddingLeft: 15
    },
    inputView: {

        width: '95%'
    },
    problemText: {
        color: "#484848",
        fontFamily: 'nunitoBlack',
        fontSize: 16,
        marginTop: 20,
    }



})