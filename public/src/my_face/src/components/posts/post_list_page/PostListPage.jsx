import React, { useEffect, useState } from "react";
import { PostList } from "../post_list/PostList.jsx";

export function PostListPage() {

    const [postList, setPostList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/posts`)
                .then(response => response.json())
                .then(postListJson => setPostList(postListJson.results));
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
        <h1>MyFace - Posts</h1>
        {
        postList !== undefined
            ? <PostList postList={postList} />
            : <p>Loading posts...</p>
        }
        </main>
    


}
