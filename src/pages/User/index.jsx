import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function User(id) {
    const [ user, setUser] = useState({});

    const userId = useParams();
    const url = "http://82.65.6.187:8002/api/users/" + userId.id;
    useEffect(() => {
        
     (async () => {
         try {
         const response = await axios.get(url);
         setUser(response.data);
         } catch (error) {
         console.error(error.message);
         }
     })();
     }, []);

    return (
        <div>
            <h1>{user.nickname}</h1>
        </div>
    );
}