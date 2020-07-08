import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Linking, TextInput } from 'react-native';
import Header from '../Header.js'
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import FlatButton from '../buttonOnSubmit.js'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import CheckBoxItem from '../CheckBoxItem'
const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('../assets/Fonts/Nunito-Black.ttf'),
    'nunitoRegular': require('../assets/Fonts/Nunito-Regular.ttf'),
    'nunitoSemiBold': require('../assets/Fonts/Nunito-SemiBold.ttf'),
})
export default class AddRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: [
                {
                    id: "Телефон",
                    name: "1",
                    title: "Телефон",
                },
                {
                    id: "WhatsApp",
                    name: "2",
                    title: "WhatsApp"
                },
                {
                    id: "Telegram",
                    name: "3",
                    title: "Telegram"
                },
            ],
            selectedBoxes: [],
            isAgree: false,
            fontsLoaded: false,
            userName: '',
            userCity: '',
            userText: '',
            userPhone: '',
            userPrivateText: '',
        };
    }
    onUpdate = (name) => {
        this.setState(previous => {
            let selectedBoxes = previous.selectedBoxes;
            let index = selectedBoxes.indexOf(name)
            if (index === -1) {
                selectedBoxes.push(name)
            } else {
                selectedBoxes.splice(index, 1)
            }
            return { selectedBoxes };
        });
    }

    onChangeAgree() {
        this.setState({ isAgree: !this.state.isAgree });
    }
    Forms = () => {
        const FormData = {
            region: this.state.userCity,
            text: this.state.userText,
            private_text: this.state.userPrivateText,
            author_name: this.state.userName,
            author_phone: this.state.userPhone,
            contact_types: this.state.selectedBoxes
        }

    }

    render() {
        const { response } = this.state;
        if (this.state.fontsLoaded) {
            return (
                <SafeAreaView style={styles.container}>
                    <Header />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.main}>
                            <Text style={styles.title}>Центр взаимопомощи</Text>
                            <Text style={styles.text}><Text style={styles.subtitle}>Центр взаимопомощи</Text> - некоммерческий проект для людей которые могут
                        помочь или кому необходима помощь в этот непростой период. Мы не размещаем рекламу,
                        платные услуги, лживые обращения и прочие объявления, которые не соответствуют
                        общественным нормам морали. </Text>
                            <Text style={styles.dealText}>Заполнив форму, Вы даёте согласие на размещение указанной информации
                        на сайте <Text style={{ color: '#2979FF' }} onPress={() => Linking.openURL('https://xn--80asehdb.kz/')}>онлайн.kz</Text>.
                         Информация находится в открытом доступе.</Text>
                            <TextInput value={this.state.text} placeholderTextColor="#8291b9" onChangeText={userName => this.setState({ userName })} placeholder='Ваше имя' style={styles.inputName} />
                            <TextInput value={this.state.text} placeholderTextColor="#8291b9" onChangeText={userCity => this.setState({ userCity })} placeholder='Ваш город' style={styles.inputName} />
                            <TextInput value={this.state.text} placeholderTextColor="#8291b9" onChangeText={userText => this.setState({ userText })} placeholder='Текст обьявления' multiline style={styles.inputText} />
                            <TextInput value={this.state.text} placeholderTextColor="#8291b9" onChangeText={userPhone => this.setState({ userPhone })} placeholder='Ваш номер телефона' keyboardType='numeric' style={styles.inputName} />
                            <Text style={styles.radioText}>Выберите, с помощью чего с Вами можно связаться:</Text>
                            {
                                response.map(item => <CheckBoxItem label={item.title} key={item.id} onUpdate={this.onUpdate.bind(this, item.name)} />)
                            }

                            <TextInput value={this.state.text} onChangeText={userPrivateText => this.setState({ userPrivateText })} placeholderTextColor="#8291b9" placeholder='Дополнительный комментарий' multiline style={styles.inputText} />

                            <CheckBox
                                title='Согласен(-а) с условиями'
                                checked={this.state.isAgree}
                                onPress={this.onChangeAgree.bind(this)}
                            />
                            <FlatButton text='Отправить' onPress={this.Forms} />
                        </View>
                    </ScrollView>
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
const styles = ({

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
        paddingRight: 15
    },
    title: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 20,
        color: "#484848",
        fontFamily: 'nunitoBlack'
    },
    subtitle: {
        fontSize: 16,
        color: "#484848",
        fontFamily: 'nunitoSemiBold'
    },
    text: {
        fontSize: 14,
        color: "#484848",
        opacity: 0.8,
        lineHeight: 18,
        marginTop: 10,
        fontFamily: 'nunitoRegular'
    },
    dealText: {
        fontSize: 14,
        color: "#484848",
        opacity: 0.8,
        lineHeight: 18,
        marginTop: 5
    },
    inputName: {
        marginTop: 15,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        height: 40,
        fontSize: 16

    },
    radioText: {
        fontSize: 17,
        marginTop: 7,
        color: '#8291b9',
    },
    inputText: {
        padding: 10,
        paddingLeft: 15,
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 17,
        height: 70,


    }

});