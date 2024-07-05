import { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
            .then(res => {
                setUsers(res.map((user: {name: string}) => user.name));
            })
            .catch(error => setError('error fetch users'));
    }, [])
    return (
        <div>
            <h1>Users</h1>
            {error && <span>{error}</span>}
            <ul>
                {
                    users.map(user => (
                        <li key={user}>{user}</li>
                    ))
                }
            </ul>
        </div>
    )
}
