import React from 'react'
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements'
export default class CheckBoxItem extends React.Component {
    state = {
        check: false,
    }
    onValueChange = () => {

        this.setState(previous => {
            return { check: !previous.check }
        }, () => this.props.onUpdate());
        // once the state has been updated call the onUpdate function
        // which will update the selectedBoxes array in the parent componetn
    }
    render() {
        return (
            <View>
                <CheckBox
                    title={this.props.label}
                    checked={this.state.check}
                    onPress={this.onValueChange}
                />
            </View>
        );
    }
}
