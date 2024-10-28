import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router'

export default function Product() {
    const { product } = useLocalSearchParams();

    return (
        <View className=''>
            <Text>{product}</Text>
        </View>
    );
}