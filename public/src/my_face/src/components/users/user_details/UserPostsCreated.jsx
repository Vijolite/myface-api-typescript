import React from "react";
//import { PostList } from '..../posts/post_list/PostList.jsx';

//import { PostList } from 'C:/Training/myface-api-typescript/public/src/my_face/src/components/posts/post_list/PostList.jsx';



export function UserPostsCreated(props) {
    return <ol>
        {props.posts.map((p, index) => (
            <li key={index}>
                <h2>{p.message}</h2>
                <img src={p.imageUrl} alt={p.message} />
                <p>Created: {p.createdAt}</p>
            </li>
        ))}
    </ol>
}

//trying to connect with PostList from post
// export function UserPostsCreated(props) {
//     const arr = props.posts;
//     console.log(arr);
//     //return <div><PostList postList={arr} /></div>
//     //return <div>{arr} </div>
// }