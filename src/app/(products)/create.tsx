import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { createProductApi } from '@/src/services/productApi';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, StatusBar, Text, View } from 'react-native';

type FormData = {
    productName: string,
    brand: string,
    type: string,
    warrantyPeriod: Number,
    price: Number,
    serialNumber: string,
    startDate: string,
    purchaseDate: string
}

export default function CreateProduct() {
    const router = useRouter();
    const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
        defaultValues: {
            productName: '',
            brand: '',
            type: '',
            warrantyPeriod: '',
            price: '',
            serialNumber: '',
            startDate: '',
            purchaseDate: ''
        }
    });

    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: ['createProduct'],
        mutationFn: (formData: FormData) => createProductApi({ ...formData }),
        onSuccess: handleSuccess
    });

    function handleCreate() {
        const formData = getValues();
        mutate(formData);
    }

    function handleSuccess() {
        router.replace('/(products)/');
    }

    return (
        <>
            <KeyboardAvoidingView className='w-full h-full bg-indigo p-6 pt-16'>
                <Text className='text-2xl text-white font-bold pb-4'>Create Product</Text>
                <ScrollView
                    className='w-full h-full'
                >
                    <Controller
                        control={control}
                        name='productName'
                        rules={{
                            required: {
                                value: true,
                                message: 'Product name is required'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Product Name'
                                value={value}
                                onChange={onChange}
                                placeholder='e.g. Laptop'
                                error={errors.productName?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='brand'
                        rules={{
                            required: {
                                value: true,
                                message: 'Brand name is required'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Brand Name'
                                value={value}
                                onChange={onChange}
                                placeholder='e.g. Apple'
                                error={errors.brand?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='type'
                        rules={{
                            required: {
                                value: true,
                                message: 'A type is required'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Type'
                                value={value}
                                onChange={onChange}
                                placeholder='e.g. Electronics'
                                error={errors.type?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='warrantyPeriod'
                        rules={{
                            required: {
                                value: true,
                                message: 'Warranty is required'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Warranty (months)'
                                value={String(value)}
                                onChange={onChange}
                                placeholder='e.g. 12'
                                error={errors.warrantyPeriod?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='price'
                        rules={{
                            required: {
                                value: true,
                                message: 'Price is required'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Price'
                                value={String(value)}
                                onChange={onChange}
                                placeholder='e.g. 3000'
                                error={errors.price?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='serialNumber'
                        rules={{
                            required: {
                                value: true,
                                message: 'Serial number is required'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Serial number'
                                value={value}
                                onChange={onChange}
                                placeholder='e.g. R4F5R25364'
                                error={errors.serialNumber?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='startDate'
                        rules={{
                            required: {
                                value: true,
                                message: 'Start date is required'
                            },
                            pattern: {
                                value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
                                message: 'Invalid date format'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Warranty Start Date'
                                value={value}
                                onChange={onChange}
                                placeholder='e.g. 1970-01-01'
                                error={errors.startDate?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='purchaseDate'
                        rules={{
                            required: {
                                value: true,
                                message: 'Purchase date is required'
                            },
                            pattern: {
                                value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
                                message: 'Invalid date format'
                            }
                        }}
                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Purchase Date'
                                value={value}
                                onChange={onChange}
                                placeholder='e.g. 1970-01-01'
                                error={errors.purchaseDate?.message}
                                classname='mb-4'
                            />
                        )}
                    />

                    <Button
                        label='Create'
                        isLoading={isPending}
                        disabled={isPending}
                        onClick={handleSubmit(handleCreate)}
                    />

                    {
                        isError && (
                            <Text className='w-full text-center my-4 text-red-500 text-lg font-semibold'>{error.message}</Text>
                        )
                    }
                </ScrollView>
            </KeyboardAvoidingView>

            <StatusBar barStyle='light-content' />
        </>
    );
}