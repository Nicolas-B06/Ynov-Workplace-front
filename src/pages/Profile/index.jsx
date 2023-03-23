import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile(){
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = "http://82.65.6.187:8002/api/users/1/info";
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(url, config)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
                throw new Error('Something went wrong on api server!');
            });
    }, [user]);


    return (
        <div>
            <h1>Mon profile</h1>
            <p>
                Pseudo : {user.nickname}
            </p>
            <p>
                Email: {user.email}
            </p>
        </div>
    );
}