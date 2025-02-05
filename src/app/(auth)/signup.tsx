import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { saveToken } from '@/src/hooks/useToken';
import { signupApi } from '@/src/services/authApi';
import { useMutation } from '@tanstack/react-query';
import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StatusBar, Text, View } from 'react-native';

type FormData = {
    fullname: string,
    email: string,
    password: string
}

export default function SignupPage() {
    const router = useRouter();

    const { mutate, data, isPending, isError, isSuccess, error } = useMutation({
        mutationKey: ['signup'],
        mutationFn: ({ fullname, email, password }: FormData) => signupApi(fullname, email, password)
    });

    const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
        defaultValues: {
            fullname: '',
            email: '',
            password: ''
        }
    });

    function handleSignup() {
        const { fullname, email, password } = getValues();
        mutate({ fullname, email, password });
    }

    useEffect(() => {
        if (isSuccess) {
            saveToken(data.data.token).then(() => {
                router.push('/(products)/');
            });
        }
    }, [isSuccess]);

    return (
        <>
            <View className='w-full h-full bg-indigo p-6 pt-28'>
                <Text className='text-white mb-10 font-bold text-2xl'>Sign up</Text>

                <View className='w-full'>
                    <Controller
                        control={control}
                        name='fullname'
                        rules={{
                            required: {
                                value: true,
                                message: 'Your name is required'
                            }
                        }}

                        render={({ field: { value, onChange } }) => (
                            <Input
                                label='Full name'
                                value={value}
                                onChange={onChange}
                                placeholder='John doe'
                                error={errors.fullname?.message}
                                classname='mb-5'
                            />
                        )}
                    />

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
                        label='Sign up'
                        disabled={isPending}
                        isLoading={isPending}
                        onClick={handleSubmit(handleSignup)}
                    />

                    {
                        isError && (
                            <Text className='w-full my-4 text-center text-red-500 text-lg font-medium'>{error.message}</Text>
                        )
                    }
                </View>

                <View className='w-full flex-row items-center justify-center mt-4'>
                    <Text className='text-light-gray text-base'>Already have an account?</Text>
                    <Link href='/(auth)/signin' className='text-orange ml-1 text-base font-semibold'>Sign in</Link>
                </View>
            </View>

            <StatusBar barStyle={'light-content'} />
        </>
    )
}
