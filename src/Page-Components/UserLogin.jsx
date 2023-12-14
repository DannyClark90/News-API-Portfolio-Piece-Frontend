import { useState, useEffect } from "react";
import fetchApiData from "../api";
import '../css/Style.css'
import Loading from "./Loading";
import UserCard from "../Components/UserCard";

const UserLogin = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() =>{
        fetchApiData.get('/users')
        .then(({data}) =>{
            setUsers(data.allUsers)
        })
    }, [])

    if(!Object.keys(users).length){
        return <Loading/>}
        else {
            return (
            <>
                <h2 className="text-black font-bold text-4xl my-5">Select User To Login</h2>
                <main className="page-container">
                    <ul>
                        {users.map((user) => { return (
                        <li key={user.username}><UserCard user={user}/></li>)})
                    }
                    </ul>
                </main>
                </>
            )
        }
};

export default UserLogin