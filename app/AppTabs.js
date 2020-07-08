import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native'
import News from './components/News.js'
import AddRequest from './components/AddRequest.js'
import Requests from './components/Requests.js'
import Feedback from './components/Feedback.js'
import AboutProject from './components/AboutProject.js'
import { Feather, MaterialIcons } from "@expo/vector-icons";
import NewsStack from './stack/NewsStack.js'
import RequestsStack from './stack/RequestsStack.js'

const Tab = createBottomTabNavigator();
export default function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'Новости') {
                        iconName = 'home';
                        return <Feather name={"home"} size={24} color={color} />;

                    } else if (route.name === 'Заявки') {
                        iconName = 'grid';
                        return <Feather name={"grid"} size={24} color={color} />;
                    }
                    else if (route.name === 'Оставить заявку') {
                        iconName = 'plus-circle';
                        return <Feather name={"plus-circle"} size={24} color={color} />;
                    }
                    else if (route.name === 'Обратная связь') {
                        iconName = 'feedback';
                        return <MaterialIcons name={"feedback"} size={24} color={color} />;
                    }
                    else if (route.name === 'О проекте') {
                        iconName = 'info';
                        return <Feather name={"info"} size={24} color={color} />;
                    }

                    return <Feather name={iconName} size={24} color={color} />;
                },

            })}
            tabBarOptions={{
                activeTintColor: '#2979FF',
                inactiveTintColor: '#000000',
                labelStyle: {
                    fontSize: 9,
                },
                style: {
                    backgroundColor: '#f6f7fa',
                    elevation: 0
                },

            }}

        >
            <Tab.Screen name="Новости" component={NewsStack} />
            <Tab.Screen name="Заявки" component={RequestsStack} />
            <Tab.Screen name="Оставить заявку" component={AddRequest} />
            <Tab.Screen name="Обратная связь" component={Feedback} />
            <Tab.Screen name="О проекте" component={AboutProject} />
        </Tab.Navigator>
    );
}
