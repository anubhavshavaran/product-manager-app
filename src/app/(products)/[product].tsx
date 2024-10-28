import React from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import { getProductApi } from '@/src/services/productApi';
import ProductDetails from '@/src/components/ProductDetails';

export default function Product() {
    const { product } = useLocalSearchParams();

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['product', product],
        queryFn: () => getProductApi(String(product))
    });

    return (
        <>
            <View className='w-full h-full bg-indigo p-6 pt-16'>
                <Text className='text-2xl text-white font-bold mb-4'>Product Details</Text>
                {
                    isLoading && <ActivityIndicator size='large' />
                }

                {
                    isSuccess && <ProductDetails product={data.data.product} />
                }
            </View>

            <StatusBar barStyle='light-content' />
        </>
    );
}