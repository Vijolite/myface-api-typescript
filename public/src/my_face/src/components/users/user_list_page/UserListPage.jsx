import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { UserList } from "../user_list/UserList.jsx";
import { getUsers } from "../../../clients/myFaceClients";
import { Link, useSearchParams } from "react-router-dom";

export function UserListPage() {

    const [userList, setPostList] = useState();

    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    // useEffect(
    //     function() {
    //         const url="http://localhost:3001/users?page="+pageNum; 
    //         //const url="http://localhost:3001/users?page="+"2"; 
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(userListJson => setUserList(userListJson.results));
    //     },
    //     []
    // );
    useEffect(
        function() {
            getUsers(pageNumber, pageSize)
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

    let listElements;
    if (userList !== undefined) {
        listElements = <>
            {nextPrevLinks}
            <UserList userList={userList} />
            {nextPrevLinks}
        </>
    } else {
        listElements = <p>Loading users...</p>
    }


    //<Link to = {`/users?page=${pageNum}`}>
    // return <main>
    //     <h1>MyFace - Users</h1>

    //     <Link to = {`/users?page=${pageNum}`}>
    //         <h2 onClick={function() {setPageNum((parseInt(pageNum)+1).toString()); console.log(pageNum)}}>
    //             Next... </h2>
    //     </Link>
    //     {
    //     userList !== undefined
    //         ? <UserList userList={userList} />
    //         : <p>Loading users...</p>
    //     }
    //     </main>

    return <main>
    <h1>MyFace - Users</h1>
    {listElements}
    </main>
    


}
