import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams ={
    HomeScreen: undefined;
    SearchScreen: undefined;
    PokemonScreen: {
        simplePokemon: SimplePokemon;
        color: string;
    }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {

            }
        }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
            {/* <Stack.Screen name='Profile' component={Profile} /> */}
            {/* <Stack.Screen name='Settings' component={Settings} /> */}
        </Stack.Navigator>
    )
}
