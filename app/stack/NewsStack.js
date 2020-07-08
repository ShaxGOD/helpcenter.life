import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import News from '../components/News';
import NewsDetails from '../components/NewsDetails';

const Stack = createStackNavigator();

export default class NewsStack extends React.Component {
    createNewsStack = () =>
        <Stack.Navigator initialRouteName="News">
            <Stack.Screen
                name="News"
                component={News}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetails}
                options={{
                    headerTitle: 'Описание новости',
                    headerBackTitle: 'Назад'
                }} />
        </Stack.Navigator>

    render() {
        return this.createNewsStack();
    }
}