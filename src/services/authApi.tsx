import axiosInstance from "./axiosInstance";

export async function signupApi(fullname: string, email: string, password: string) {
    const { data, status } = await axiosInstance.request({
        url: '/users/signup',
        method: 'post',
        data: {
            fullname,
            email,
            password
        }
    });

    if (status.toString().startsWith('4')) throw new Error(data?.message);

    return data;
}

export async function signinApi(email: string, password: string) {
    const { data, status } = await axiosInstance.request({
        url: '/users/signin',
        method: 'post',
        data: {
            email,
            password
        }
    });

    if (status.toString().startsWith('4')) throw new Error(data?.message);

    return data;
}