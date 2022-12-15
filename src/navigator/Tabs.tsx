import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from '../navigator/Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    const theme = useColorScheme();
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                // backgroundColor: '',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS == 'ios' ? 0 : 5),
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: (theme === 'dark' ? 'rgba(0,0,0,0.90)' : 'rgba(255,255,255,0.92)'),
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios' ? 80 : 60)
                }
            }}
        >
            <Tab.Screen
                name="Navigator"
                component={Navigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => <Icon color={color} size={25} name='list-outline' />
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Busqueda',
                    tabBarIcon: ({ color }) => <Icon color={color} size={25} name='search-outline' />
                }}
            />
        </Tab.Navigator>
    );
}