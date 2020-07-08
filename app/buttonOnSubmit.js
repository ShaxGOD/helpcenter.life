import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text} </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 15,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#2979FF',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})