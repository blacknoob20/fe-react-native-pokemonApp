import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
                marginTop: 370,
            }}
        >
            {/* types y peso */}
            <View
                style={{ ...styles.container }}
            >
                <Text style={{ ...styles.title }}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => {
                            return <Text
                                key={type.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}>
                                {type.name}
                            </Text>
                        })
                    }
                </View>

                {/* peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight}</Text>
            </View>

            {/* sprites */}
            <View style={{ ...styles.container, }}>
                <Text>Sprites</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
                <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprite} />
                <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprite} />
                <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprite} />
            </ScrollView>

            {/* Habilidades */}
            <View
                style={{ ...styles.container }}
            >
                <Text style={{ ...styles.title }}>Habilidades base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => {
                            return <Text
                                key={ability.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}>
                                {ability.name}
                            </Text>
                        })
                    }
                </View>
            </View>

            {/* Movimientos */}
            <View
                style={{ ...styles.container }}
            >
                <Text style={{ ...styles.title }}>Movimientos</Text>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                }}>
                    {
                        pokemon.moves.map(({ move }) => {
                            return <Text
                                key={move.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}>
                                {move.name}
                            </Text>
                        })
                    }
                </View>
            </View>

            {/* Stats */}
            <View
                style={{ ...styles.container }}
            >
                <Text style={{ ...styles.title }}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, i) => {
                            return (
                                <View
                                    key={stat.stat.name + i}
                                    style={{
                                        flexDirection: 'row'
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.regularText,
                                            marginRight: 10,
                                            width: 150,
                                        }}>
                                        {stat.stat.name}
                                    </Text>
                                    <Text style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                    }}>
                                        {stat.base_stat}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
                {/* sprite final */}
                <View
                style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
    },
    basicSprite: {
        width: 100,
        height: 100,
    }
});