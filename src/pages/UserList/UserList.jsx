import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../../components/RegisterForm";

// http://82.65.6.187:8002/api/doc

export default function UserList() {

   const url = "http://82.65.6.187:8002/api/users";
   const [ users, setUsers ] = useState([]);

   useEffect(() => {
    (async () => {
        try {
        const response = await axios.get(url);
        setUsers(response.data["hydra:member"]);
        } catch (error) {
        console.error(error.message);
        }
    })();
    }, []);

    return (
        <>
            <p>hello</p>
            <Form fields={[{label:"email"},{label:"email"},{label:"email"}]}/>
            {users.map((user) =>
                <div>
                    <Link to={`/users/${user.id}`}>{user.nickname}</Link>
                </div>
            )
            }
        </>
    );
}
