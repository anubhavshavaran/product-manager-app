import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

type ButtonProps = {
    label: string,
    disabled: boolean,
    isLoading: boolean,
    onClick: () => void
}

export default function Button({ label, disabled, isLoading, onClick }: ButtonProps) {
    return (
        <Pressable
            onPress={onClick}
            disabled={disabled}
            className="w-full p-4 bg-orange border-yellow border-[2px] rounded-xl items-center"
        >
            {
                isLoading ? (
                    <ActivityIndicator size={'small'} />
                ) : (
                    <Text className='text-lg p-0 font-semibold text-white'>{label}</Text>
                )
            }
        </Pressable>
    );
}