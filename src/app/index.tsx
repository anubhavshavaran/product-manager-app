import React, { useEffect } from 'react';
import { getToken } from '../hooks/useToken';
import { useRouter } from 'expo-router';

export default function index() {
    const router = useRouter();

    useEffect(() => {
        async function authenticate() {
            const token = await getToken();
            if (token != null) {
                router.replace('/(products)/');
            } else {
                router.replace('/(auth)/signin');
            }
        }

        authenticate();
    }, []);

    return (
        <></>
    );
}