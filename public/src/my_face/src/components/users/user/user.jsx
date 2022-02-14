import React from "react";
import {Link} from 'react-router-dom';
import './user.scss';

export function User({ user }) {
//export function User() {

    // const user = {
    //     "id": 58,
    //     "name": "Anatollo Assinder",
    //     "username": "aassinder1l",
    //     "email": "aassinder1l@blinklist.com",
    //     "coverImageUrl": "https://picsum.photos/id/302/2100/800",
    //     "profileImageUrl": "https://robohash.org/aassinder1l.png?bgset=bg1",
    // }

    //<img src={user.coverImageUrl} alt={user.name} />
    return <div className="user">
        <div className="user_name">
            <Link to = {`/users/${user.id}`}>
                <h2>{user.name}</h2>
            </Link>
        </div>
        <div className="user_details">
            <p>Username: {user.username}</p>
            <p>Email:  {user.email}</p>
        </div>
        <div className="user_img">
            <Link  to = {`/users/${user.id}`}>
                <img src={user.profileImageUrl} alt={user.name} />
            </Link>
        </div>

    </div>
}