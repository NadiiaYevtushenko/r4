import axios from 'axios'
import { UserInterface } from '../types/User.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData: Promise<UserInterface[]> = axios
    .get<UserInterface[]>(API_URL, {
        timeout: 7000
    })
    .then((response) => {
        return new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 2000))
        //штучно затримує відповідь ще на 2 секунди (для імітації повільного інтернету).
    })
    .catch((error) => {
        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNABORTED') {
                throw new Error(`Request timeout: The server did not respond within 7 seconds`)
            }
            throw new Error(`Error fetching data: ${error.message}`)
        } else {
            throw new Error(`Unknown error occurred`)
        }
    })