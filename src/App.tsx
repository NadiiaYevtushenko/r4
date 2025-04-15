import { Suspense } from 'react';
import UsersComponent from './components/UsersComponent';
import OptimisticMessages from './components/OptimisticMessages';

const App = () => {
    return (
        <div className="container">
            <h1 className="h1">Users list</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <UsersComponent />
                <h2 className="h2">Send a message</h2>
                <OptimisticMessages />
            </Suspense>
        </div>
    )
}

export default App