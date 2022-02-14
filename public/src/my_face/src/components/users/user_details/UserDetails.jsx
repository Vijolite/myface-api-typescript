import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { User } from "../user/user.jsx";
import {UserPostsCreated} from "./UserPostsCreated.jsx";
import {UserPostsLikedDisliked} from "./UserPostsLikedDisliked.jsx";
import './UserDetails.scss';

export function UserDetails() {//UserDetails(props) {
    //const id=props.id;
    const {userId}=useParams();

    const [user, setUser] = useState();

    useEffect(
        function() {
            //fetch(`http://localhost:3001/users/58`) 
            const url="http://localhost:3001/users/"+userId;
            fetch(url)
            //fetch(`http://localhost:3001/users/${id}`)
                //.then(response => response.json());
                //.then(userJson => setUser(userJson.results));
                .then(response => response.json())
                .then(response => setUser(response));
        },
        []
    );

    //console.log(user);
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
                <div className="user_top">
                    
                    <img className="img_bg" src={user.coverImageUrl} alt={user.name} />
                    <div class="user_main_details">
                        <img class="user_main_img" src={user.profileImageUrl} alt={user.name} />
                        <h1>{user.name}</h1>
                        <div className= "user_main_add_info">
                            <p>({user.username})</p>
                            <p>Email:{user.email}</p>
                        </div>
                    </div>
                </div>
                <div className="user_content">
                    <br/>
                    <h3>Posts created:</h3>
                    <div className="user_main_middle">   
                        <UserPostsCreated posts={user.posts}/>
                    </div>
                </div>

                <div className="user_content_ld user_content_like">
                    <div onClick={function() {getPostsLD(user.likes,postsLiked,setPostsLiked)}}>
                    <h3>Posts liked:</h3>{postsLiked} </div>
                </div>
                    <div className="user_content_ld user_content_dislike">
                    <div onClick={function() {getPostsLD(user.dislikes,postsDisliked,setPostsDisliked)}}>
                    <h3>Posts disliked:</h3>{postsDisliked} </div>
                </div>
                
            </div>
            : <p>Loading user details...</p>
        }
        
        </main>
}

{/* <div>Posts created:<UserPostsCreated posts={user.posts}/></div>

<div onClick={function() {getPostsLD(user.likes,postsLiked,setPostsLiked)}}>
Posts liked:{postsLiked} </div>

<div onClick={function() {getPostsLD(user.dislikes,postsDisliked,setPostsDisliked)}}>
Posts disliked:{postsDisliked} </div> */}


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