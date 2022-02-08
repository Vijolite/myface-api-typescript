import React from "react";

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

    return <div>
        <h2>{user.name}</h2>
        <img src={user.coverImageUrl} alt={user.name} />
        <img src={user.profileImageUrl} alt={user.name} />
        <p>Username: {user.username}</p>
        <p>Email:  {user.email}</p>
    </div>
}