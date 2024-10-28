import ProductsList from '@/src/components/ProductsList';
import { getAllProductsApi } from '@/src/services/productApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';

export default function ProductsPage() {
    const { data, isFetching, isError, error, isSuccess, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProductsApi,
    });

    return (
        <>
            <View className='w-full h-full bg-indigo p-6 pt-16'>
                {
                    isFetching && <ActivityIndicator size='large' />
                }

                {
                    isSuccess && (
                        <ProductsList products={data.data.products} refresh={refetch} isFetching={isFetching} />
                    )
                }

                {
                    isError && <Text className='text-red-500 text-4xl font-semibold'>{error.message}</Text>
                }
            </View>

            <StatusBar barStyle={'light-content'} />
        </>
    );
}