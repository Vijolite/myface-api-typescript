import React from "react";
import { User } from "../user/user.jsx";
import './UserList.scss';



export function UserList({ userList }) {
//export function PostList() {
    return <ol>
        {userList.map((user, index) => (
            <li key={index}>
                <User user={user} />
            </li>
        ))}
    </ol>
}
