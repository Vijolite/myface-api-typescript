import React, { useEffect, useState } from "react";
import { UserList } from "../user_list/UserList.jsx";

export function UserListPage() {

    const [userList, setUserList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        []
    );

    // const postList = [
    //     {"id": 130,
    // "message": "Operative system-worthy synergy",
    // "imageUrl": "https://picsum.photos/id/158/600",
    // "createdAt": "2021-01-27 21:55:56",
    // "postedBy": {
    //     "id": 3,
    //     "name": "Valry Gregory",
    //     "username": "vgregory2",
    //     "email": "vgregory2@wsj.com",
    //     "profileImageUrl": "https://robohash.org/vgregory2.png?bgset=bg1",
    //     "coverImageUrl": "https://picsum.photos/id/692/2100/800"
    // }
    // },
    
    //     {"id": 796,
    //             "message": "Profit-focused full-range migration",
    //             "imageUrl": "https://picsum.photos/id/472/600",
    //             "createdAt": "2021-01-27 19:12:57",
    //             "postedBy": {
    //                 "id": 42,
    //                 "name": "Carolann Haeslier",
    //                 "username": "chaeslier15",
    //                 "email": "chaeslier15@webmd.com",
    //                 "profileImageUrl": "https://robohash.org/chaeslier15.png?bgset=bg1",
    //                 "coverImageUrl": "https://picsum.photos/id/486/2100/800"
    //             }
    //         }
    
    // ];
    
    return <main>
        <h1>MyFace - Users</h1>
        {
        userList !== undefined
            ? <UserList userList={userList} />
            : <p>Loading users...</p>
        }
        </main>
    


}
