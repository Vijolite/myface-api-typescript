import React, { useEffect, useState } from "react";
import { getPreEmitDiagnostics } from "typescript";
import { User } from "../user/user.jsx";
import {UserPostsCreated} from "./UserPostsCreated.jsx";
import {UserPostsLikedDisliked} from "./UserPostsLikedDisliked.jsx";

export function UserDetails(props) {//UserDetails(props) {
    const id=props.id;

    const [user, setUser] = useState();

    useEffect(
        function() {
            //fetch(`http://localhost:3001/users/58`) 
            const url="http://localhost:3001/users/"+id;
            fetch(url)
            //fetch(`http://localhost:3001/users/${id}`)
                //.then(response => response.json());
                //.then(userJson => setUser(userJson.results));
                .then(response => response.json())
                .then(response => setUser(response));
        },
        []
    );

    console.log(user);
    //console.log(user.name);

    // const user =
    // {
    //     "id": 58,
    //     "name": "Anatollo Assinder",
    //     "username": "aassinder1l",
    //     "email": "aassinder1l@blinklist.com",
    //     "coverImageUrl": "https://picsum.photos/id/302/2100/800",
    //     "profileImageUrl": "https://robohash.org/aassinder1l.png?bgset=bg1"
    // }

    //<h1>{user.name}</h1>

    const [postsLiked, setPostsLiked]=useState (''); 
    const [postsDisliked, setPostsDisliked]=useState ('');  

    function getPostsLD (arr,posts,st_f) {
        let s='';
        if (posts==='')
                st_f(<UserPostsLikedDisliked posts={arr}/>);
        else
            st_f('');
    }

    
    return <main>
        {
        user !== undefined
            ? <div>
                <h1>{user.name}</h1>
                <img src={user.coverImageUrl} alt={user.name} />
                <img src={user.profileImageUrl} alt={user.name} />
                <p>({user.username})</p>
                <p>Email:{user.email}</p>
                <div>Posts created:<UserPostsCreated posts={user.posts}/></div>

                <div onClick={function() {getPostsLD(user.likes,postsLiked,setPostsLiked)}}>
                Posts liked:{postsLiked} </div>

                <div onClick={function() {getPostsLD(user.dislikes,postsDisliked,setPostsDisliked)}}>
                Posts disliked:{postsDisliked} </div>
                
                </div>
            : <p>Loading user details...</p>
        }
        
        </main>
}

//<div>Posts disliked:<UserPostsLikedDisliked posts={user.dislikes}/></div>

// return <main>
//         {
//         user !== undefined
//             ? <div>
//                 <h1>{user.name}</h1>
//                  <p>({user.username})</p>
//                  <p>Email:{user.email}</p>
 //                 <User user={user} />
//                 </div>
//             : <p>Loading user details...</p>
//         }
        
//         </main>