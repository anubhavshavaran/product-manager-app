import ProductsList from '@/src/components/ProductsList';
import { getAllProductsApi } from '@/src/services/productApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { ActivityIndicator, Pressable, StatusBar, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { removeToken } from '@/src/hooks/useToken';

export default function ProductsPage() {
    const { data, isFetching, isError, error, isSuccess, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProductsApi,
    });

    const router = useRouter();
    function handleClick() {
        router.navigate('/(products)/create');
    }

    async function handleLogout() {
        await removeToken();
        router.navigate('/(auth)/signin');
    }

    return (
        <>
            <View className='w-full h-full bg-indigo p-6 pt-16'>
                <View className='w-full mb-6 flex flex-row justify-between items-center '>
                    <Text className='text-2xl text-white font-bold'>All Products</Text>
                    <View className='flex flex-row justify-center items-center gap-4 '>
                        <Pressable
                            onPress={handleClick}
                        >
                            <View className='flex flex-row justify-center items-center'>
                                <Text className='text-white text-lg font-semibold'>Create</Text>
                                <MaterialIcons name="add" size={24} color="white" />
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={handleLogout}
                        >
                            <MaterialIcons name="logout" size={24} color="white" />
                        </Pressable>
                    </View>
                </View>

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