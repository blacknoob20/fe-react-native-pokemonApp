import React, { useEffect, useState } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, useColorScheme, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ onDebounce, style }: Props) => {
    const [textValue, setTextValue] = useState('');
    const theme = useColorScheme();
    const debouncedValue = useDebounceValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue]);


    return (
        <View style={{
            ...styles.container,
            ...style as any,
        }}>
            <View style={{
                ...styles.textBg,
                backgroundColor: (theme === 'dark' ? 'rgba(0,0,0,0.90)' : 'rgba(255,255,255,0.92)'),
                shadowColor: (theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'),
            }}>
                <TextInput
                    placeholder='Buscar pokemon'
                    style={styles.textInput}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name={'search-outline'}
                    color={'grey'}
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
        top: 5,
    },
    textBg: {
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2,

    },
});
