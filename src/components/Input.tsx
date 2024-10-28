import React from 'react'
import { Text, TextInput, View } from 'react-native';

type InputProps = {
    label: string,
    value: string,
    placeholder: string,
    classname?: string,
    onChange: () => void,
    error: string | undefined
}

export default function Input({ label, value, onChange, placeholder, classname, error }: InputProps) {
    return (
        <View className={classname}>
            <Text className='text-light-gray text-lg font-medium mb-1'>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#CDCDE0'}
                underlineColorAndroid={'transparent'}
                onChangeText={onChange}
                value={value}
                disableFullscreenUI
                className='p-4 rounded-xl bg-light-indigo border-[2px] border-blue-gray text-white text-lg'
            />
            {
                error && <Text className='text-red-500 font-semibold'>{error}</Text>
            }
        </View>
    );
}