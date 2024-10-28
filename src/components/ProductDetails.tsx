import React, { PropsWithChildren } from 'react'
import { Text, View } from 'react-native';
import { Product } from '../app/constants/Product';

type ProductDetailsPropsType = {
    product: Product
}

function Label({children}: PropsWithChildren) {
    return (
        <Text className="text-white font-semibold text-lg">
            {children}
        </Text>
    );
}

export default function ProductDetails({ product }: ProductDetailsPropsType) {
    const {
        id,
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
        <View className='w-full bg-light-indigo p-4 rounded-xl flex gap-2'>
            <View className='w-full flex flex-row justify-between items-baseline'>
                <Text className="text-white font-semibold text-2xl">#{String(id)} {productName}</Text>
                <Text className="text-white font-bold text-xl">$ {Number(price)}</Text>
            </View>
            <View className='w-full flex flex-row gap-4 items-center '>
                <Text className="px-2 py-[2px] text-white text-sm font-medium bg-slate-700 rounded-2xl">{brand.toUpperCase()}</Text>
                <Text className="px-2 py-[2px] text-white text-sm font-medium bg-slate-700 rounded-2xl">{type.toUpperCase()}</Text>
            </View>

            <Label>Serial number: {serialNumber}</Label>
            <Label>Warranty Period (months): {String(warrantyPeriod)}</Label>
            <Label>Start Date: {startDate?.split('T').at(0)}</Label>
            <Label>End Date: {endDate?.split('T').at(0)}</Label>
            <Label>Price: ${String(price)}</Label>
            <Label>Purchase Date: {purchaseDate?.split('T').at(0)}</Label>
            <Label>Created At: {createdAt?.split('T').at(0)}</Label>
        </View>
    );
}