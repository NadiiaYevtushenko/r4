import { use } from 'react'
import { fetchData } from '../utils/fetchUsers'
import { UserInterface } from '../types/User.interface'
import styles from './UsersComponent.module.css'


const UsersComponent = () => {
    const users: UserInterface[] = use(fetchData) /*React тут бере дані з сервера і зберігає в змінну users.*/

    return (
        <div className={styles.container}>
            <div className={styles.title}>List of users completed</div>
            {users.map((user) => (
                <div key={user.id} className={styles.user}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default UsersComponent