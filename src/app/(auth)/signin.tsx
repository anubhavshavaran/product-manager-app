import { Link } from 'expo-router';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import { useMutation } from '@tanstack/react-query';
import { signinApi } from '@/src/services/authApi';

type FormData = {
    email: string,
    password: string
}

export default function Signin() {
    const { mutate, data, isPending, isError, error, isSuccess } = useMutation({
        mutationKey: ['signin'],
        mutationFn: ({ email, password }: FormData) => signinApi(email, password)
    });

    const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    function siginUser() {
        const { email, password } = getValues();
        console.log(email, password);

        mutate({ email, password });
    }

    if (isSuccess) {
        console.log(data);
    }

    return (
        <>
            <View className='w-full h-full bg-indigo p-6 pt-28'>
                <Text className='text-white mb-10 font-bold text-2xl'>Sign in</Text>

                <View className='w-full'>
                    <Controller
                        control={control}
                        name='email'
                        rules={{
                            pattern: {
                                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                message: 'Invalid Email address'
                            },
                            required: {
                                value: true,
                                message: 'An email is required.'
                            }
                        }}

                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                onChange={onChange}
                                label='Email'
                                placeholder='johndoe@email.com'
                                classname='mb-5'
                                error={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='password'
                        rules={{
                            required: {
                                value: true,
                                message: 'A password is required'
                            },
                            min: {
                                value: 8,
                                message: 'Your password must be 8 characters long'
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                onChange={onChange}
                                label='Password'
                                placeholder='*******'
                                classname='mb-6'
                                error={errors.password?.message}
                            />
                        )}
                    />

                    <Button
                        label='Sign in'
                        disabled={isPending}
                        isLoading={isPending}
                        onClick={handleSubmit(siginUser)}
                    />

                    {
                        isError && (
                            <Text className='w-full my-4 text-center text-red-500 text-lg font-medium'>{error.message}</Text>
                        )
                    }
                </View>

                <View className='w-full flex-row items-center justify-center mt-4'>
                    <Text className='text-light-gray text-base'>Didn't have an account?</Text>
                    <Link href='/(auth)/signup' className='text-orange ml-1 text-base font-semibold'>Sign up</Link>
                </View>
            </View>

            <StatusBar barStyle={'light-content'} />
        </>
    );
}
