import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    useEffect(() => {
        if (!isMounted.current) return;

        ImageColors.getColors(pokemon.url, { fallback: 'grey' }).then((colors) => {
            if (colors.platform === 'ios') setBgColor(colors.background);
            else if (colors.platform === 'android') setBgColor(colors.dominant || 'grey');
        });

        return () => {
            isMounted.current = false;
        }
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
                navigation.navigate('PokemonScreen', {
                    simplePokemon: pokemon,
                    color: bgColor,
                });
            }}
        >
            <View
                style={{
                    ...styles.cardContiner,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor,
                }}
            >
                <View>
                    <Text
                        style={styles.name}
                    >
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />
                <FadeInImage
                    uri={pokemon.url}
                    style={styles.pokemonImg}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContiner: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 5,
        // sombra
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,

        elevation: 7,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.3,
        tintColor: 'black',
    },
    pokemonImg: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -5,
        bottom: -5,
    }
});