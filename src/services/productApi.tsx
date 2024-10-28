import axiosInstance from "./axiosInstance";
import { Product } from "../app/constants/Product";
import { getToken } from "../hooks/useToken";

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

export async function createProductApi({
    productName,
    brand,
    type,
    warrantyPeriod,
    startDate,
    price,
    serialNumber,
    purchaseDate
}: Product) {
    const token = await getToken();

    const { data, status } = await axiosInstance.request({
        url: '/products',
        method: 'post',
        data: {
            productName,
            brand,
            type,
            warrantyPeriod: Number(warrantyPeriod),
            startDate: `${startDate}T15:30:00.000Z`,
            price: Number(price),
            serialNumber,
            purchaseDate: `${purchaseDate}T15:30:00.000Z`
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status.toString().startsWith('4') || status.toString().startsWith('5')) throw new Error(data?.message);

    return data;
}