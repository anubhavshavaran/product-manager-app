import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { Product } from '../app/constants/Product';
import ProductContainer from './Product';

type ProductsListPropsType = {
    products: Array<Product>;
    refresh: () => void;
    isFetching: boolean
}

export default function ProductsList({ products, refresh, isFetching }: ProductsListPropsType) {
    return (
        <View className='w-full flex flex-col'>
            <FlatList
                data={products}
                renderItem={({ item, index }) => <ProductContainer product={item} key={index} />}
                ItemSeparatorComponent={() => <View className='h-4' />}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refresh} />}
            />
        </View>
    );
}