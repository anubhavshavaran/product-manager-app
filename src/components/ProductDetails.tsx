import React from 'react'
import { Text, View } from 'react-native';
import { Product } from '../app/constants/Product';

type ProductDetailsPropsType = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsPropsType) {
    const {
        id,
        slug,
        productName,
        brand,
        type,
        warrantyPeriod,
        startDate,
        endDate,
        price,
        serialNumber,
        purchaseDate,
        createdAt
    } = product;

    return (
        <View className='w-full '>
            <Text className="text-white font-semibold text-lg">{String(id)}</Text>
            <Text className="text-white font-semibold text-lg">{slug}</Text>
            <Text className="text-white font-semibold text-lg">{productName}</Text>
            <Text className="text-white font-semibold text-lg">{brand}</Text>
            <Text className="text-white font-semibold text-lg">{type}</Text>
            <Text className="text-white font-semibold text-lg">{String(warrantyPeriod)}</Text>
            <Text className="text-white font-semibold text-lg">{startDate}</Text>
            <Text className="text-white font-semibold text-lg">{endDate}</Text>
            <Text className="text-white font-semibold text-lg">{String(price)}</Text>
            <Text className="text-white font-semibold text-lg">{serialNumber}</Text>
            <Text className="text-white font-semibold text-lg">{purchaseDate}</Text>
            <Text className="text-white font-semibold text-lg">{createdAt}</Text>
        </View>
    );
}