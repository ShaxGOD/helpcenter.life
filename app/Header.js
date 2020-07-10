import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal, Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'


const getFonts = () => Font.loadAsync({
    'nunitoBlack': require('./assets/Fonts/Nunito-Black.ttf'),
})

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            pickerSelection: 'rus',
            pickerDisplayed: false,
        }
    }
    setPickerValue(newValue) {
        this.setState({ pickerSelection: newValue });
        this.togglePicker();
    }

    togglePicker() {
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed
        })
    }
    render() {

        const pickerValues = [
            {
                title: 'Rus',
                value: 'rus',
                img: require("./assets/rus.png")
            },
            {
                title: 'Kaz',
                value: 'kaz',
                img: require("./assets/kaz.png")
            },
            {
                title: 'Uzb',
                value: 'uzb',
                img: require("./assets/uzb.png")
            }

        ]
        if (this.state.fontsLoaded) {


            return (
                <View style={styles.header}>
                    <View>
                        <Text style={styles.icon}>helpcenter.life</Text>
                    </View>

                    <View style={{ backgroundColor: 'blue', width: 95, height: 36, borderRadius: 25 }}>
                        <TouchableOpacity onPress={() => this.togglePicker()}>
                            <Text>{this.state.pickerSelection}</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal visible={this.state.pickerDisplayed} transparent={true} >
                        <View style={{ margin: 2, padding: 2, backgroundColor: 'red', borderRadius: 25, width: 96, height: 37, }}>
                            <Text style={{ fontWeight: 'bold', alignItems: "center" }}>Выберите страну</Text>
                            {pickerValues.map((item, index) => {
                                return <TouchableHighlight key={index} onPress={() => this.setPickerValue(item.value)} style={{ paddingTop: 4, paddingBottom: 5, alignItems: "center" }}>
                                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', }}>
                                        <Image source={item.img} />
                                        <Text>{item.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            })}
                        </View>
                    </Modal>

                </View>
            );
        }
        else {
            return (
                <AppLoading startAsync={getFonts}
                    onFinish={() => this.setState({ fontsLoaded: true })}
                />
            )
        }
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