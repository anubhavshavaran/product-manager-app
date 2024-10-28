import ProductsList from '@/src/components/ProductsList';
import { getToken } from '@/src/hooks/useToken';
import { getAllProducts } from '@/src/services/productApi';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';

export default function ProductsPage() {
    let products;
    const { data, isFetching, isError, error, isSuccess, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
    });

    if (isSuccess) {
        products = data.data.products;
    }

    return (
        <>
            <View className='w-full h-full bg-indigo p-6 pt-16'>
                {
                    isFetching && <ActivityIndicator size='large' />
                }

                {
                    isSuccess && (
                        <ProductsList products={products} refresh={refetch} isFetching={isFetching} />
                    )
                }
            </View>

            <StatusBar barStyle={'light-content'} />
        </>
    );
}