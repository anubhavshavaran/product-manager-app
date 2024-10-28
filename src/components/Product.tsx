import React from 'react'
import { Pressable, Text, View } from 'react-native';
import { Product } from '../app/constants/Product';
import { useRouter } from 'expo-router';

type ProductPropsType = {
    product: Product
}

export default function ProductContainer({ product }: ProductPropsType) {
    const router = useRouter();
    const {
        productName,
        slug,
        brand,
        type,
        price,
        serialNumber
    } = product;

    function handleClick() {
        router.navigate({
            pathname: '/(products)/[product]',
            params: { product: slug }
        });
    }

    return (
        <Pressable
            onPress={handleClick}
            className='w-full p-4 flex flex-col gap-2 bg-light-indigo border-light-gray rounded-2xl'
        >
            <View className='w-full flex flex-row justify-between items-baseline'>
                <Text className="text-white font-semibold text-2xl">{productName}</Text>
                <Text className="text-white font-bold text-xl">$ {Number(price)}</Text>
            </View>
            <View className='w-full flex flex-row gap-4 items-center '>
                <Text className="px-2 py-[2px] text-white text-sm font-medium bg-slate-700 rounded-2xl">{brand.toUpperCase()}</Text>
                <Text className="px-2 py-[2px] text-white text-sm font-medium bg-slate-700 rounded-2xl">{type.toUpperCase()}</Text>
            </View>
            <Text className="text-white">Serial number: {serialNumber}</Text>
        </Pressable>
    );
}