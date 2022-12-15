import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonDetails } from '../components/PokemonDetails';
import { usePokemon } from '../hooks/usePokemon';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {
    const { top } = useSafeAreaInsets();
    const { simplePokemon, color } = route.params;
    const { id, name, url } = simplePokemon;
    const { isLoading, pokemon: pokemonFull } = usePokemon(id);
    // console.log(pokemonFull);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}
            >
                {/* back button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10,
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color={'white'}
                        size={35}
                    />
                </TouchableOpacity>

                {/* nombre del pokemon */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 40,
                }}>{name + '\n'} # {id}</Text>

                {/* pokebola */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokeball,
                    }}
                />

                <FadeInImage
                    uri={url}
                    style={{
                        ...styles.pokemonImg,
                    }}
                />

            </View>

            {/* detalles */}
            {
                isLoading
                    ? (<View style={styles.loadingIndicator}>
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>)
                    : <PokemonDetails pokemon={pokemonFull} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        zIndex: 999,
    },
    backButton: {
        position: 'absolute',
        left: 15,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 15,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImg: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});