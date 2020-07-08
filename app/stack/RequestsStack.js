import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Requests from '../components/Requests';
import RequestsDetails from '../components/RequestsDetails';

const Stack = createStackNavigator();

export default class RequestsStack extends React.Component {
    createRequestsStack = () =>
        <Stack.Navigator initialRouteName="Requests">
            <Stack.Screen
                name="Requests"
                component={Requests}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RequestsDetails"
                component={RequestsDetails}
                options={{
                    headerTitle: 'Описание заявки',
                    headerBackTitle: 'Назад'
                }}
            />
        </Stack.Navigator>
    render() {
        return this.createRequestsStack();
    }
}
