import React from 'react';
import { useForm } from 'react-hook-form';
import { StatusBar, View } from 'react-native';

export default function CreateProduct() {
    const { control } = useForm();

    return (
        <>
            <View className='bg-indigo p-6'>

            </View>

            <StatusBar barStyle='light-content' />
        </>
    );
}