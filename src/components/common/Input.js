import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

        return (
            <View>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                underlineColorAndroid='#0E7C7B'
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                />
            </View>
            );
        };

const styles = {
    inputStyle: {
        color: '#000',
        fontSize: 18,
        lineHeight: 23,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    // containerStyle: {
    //     height: 40,
    //     flex: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     alignItems: 'center'
    // },
};

export { Input };
