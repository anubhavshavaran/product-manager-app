import { dataTagSymbol } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export async function getAllProductsApi() {
    const { data, status } = await axiosInstance.request({
        url: '/products/',
        method: 'get'
    });

    if (status.toString().startsWith('4')) throw new Error(data?.message);

    return data;
}

export async function getProductApi(slug: string) {
    const { data, status } = await axiosInstance.request({
        url: `/products/${slug}`,
        method: 'get'
    });

    if (status.toString().startsWith('4')) throw new Error(data?.message);

    return data;
}

export async function createProductApi(
    productName: string,
    brand: string,
    type: string,
    warrantyPeriod: Number,
    startDate: string,
    price: Number,
    serialNumber: string,
    purchaseDate: string
) {
    const { data, status } = await axiosInstance.request({
        url: '/products',
        method: 'post',
        data: {
            productName,
            brand,
            type,
            warrantyPeriod,
            startDate,
            price,
            serialNumber,
            purchaseDate
        }
    });

    if (status.toString().startsWith('4')) throw new Error(data?.message);

    return data;
}