import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('userToken', token);
    } catch (error) {
        console.error("Error saving token:", error);
    }
}

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('userToken');
        return token
    } catch (error) {
        console.error(error);
        return null;
    }
}

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch (error) {
        console.error(error);
    }
}

export { saveToken, getToken, removeToken };