import React, { useEffect } from 'react'
import { getToken } from '../hooks/useToken';
import { useRouter } from 'expo-router';

export default function index() {
    const router = useRouter();

    useEffect(() => {
        async function authenticate() {
            const token = await getToken();
            if (token) {
                router.push('/(products)/');
            } else {
                router.push('/(auth)/signin');
            }
        }

        authenticate();
    }, []);

    return (
        <></>
    );
}