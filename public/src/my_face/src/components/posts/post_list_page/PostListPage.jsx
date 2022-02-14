import React, { useEffect, useState } from "react";
import { PostList } from "../post_list/PostList.jsx";
import { getPosts } from "../../../clients/myFaceClients";
import { Link, useSearchParams } from "react-router-dom";
import './PostListPage.scss';

export function PostListPage() {

    const [postList, setPostList] = useState();

    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    // useEffect(
    //     function() {
    //         fetch(`http://localhost:3001/posts`)
    //             .then(response => response.json())
    //             .then(postListJson => setPostList(postListJson.results));
    //     },
    //     []
    // );

    useEffect(
        function() {
            getPosts(pageNumber, pageSize)
                .then(postsPage => {
                    setPostList(postsPage.results);
                    setNext(postsPage.next);
                    setPrevious(postsPage.previous);
                });
        },
        [pageNumber, pageSize]
    );

    const nextPrevLinks = <div>
    {
        previous
            ? <Link className="page-arrow" to={previous}>⬅</Link>
            : <></>
    }
    {
        next
            ? <Link className="page-arrow" to={next}>➡</Link>
            : <></>
    }
    </div>

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

    let listElements;
    if (postList !== undefined) {
        listElements = <>
            {nextPrevLinks}
            <PostList postList={postList} />
            {nextPrevLinks}
        </>
    } else {
        listElements = <p>Loading posts...</p>
    }
    
    // return <main>
    //     <h1>MyFace - Posts</h1>
    //     {
    //     postList !== undefined
    //         ? <PostList postList={postList} />
    //         : <p>Loading posts...</p>
    //     }
    //     </main>

    return <main>
        <h1>MyFace - Posts</h1>
        {listElements}
    </main>
    


}


