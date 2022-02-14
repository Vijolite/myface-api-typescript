import React from "react";
import './UserPostsCreated.scss';
//import { PostList } from '..../posts/post_list/PostList.jsx';

//import { PostList } from 'C:/Training/myface-api-typescript/public/src/my_face/src/components/posts/post_list/PostList.jsx';



export function UserPostsCreated(props) {
    return <ol className="post_list">
        {props.posts.map((p, index) => (
            <li className="post_item post" key={index}>
                <h2>{p.message}</h2>
                <img src={p.imageUrl} alt={p.message} />
                <div>
                <p>Created: {p.createdAt}</p>
                </div>
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