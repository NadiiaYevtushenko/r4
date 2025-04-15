import { Suspense } from 'react';
import UsersComponent from './components/UsersComponent';

const App = () => {
    return (
        <div>
            <h1>Users list</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <UsersComponent />
            </Suspense>
        </div>
    )
}

export default App