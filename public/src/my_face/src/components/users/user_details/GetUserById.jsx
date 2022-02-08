import React, { useEffect, useState } from "react";




export function GetUserById (props) {
const id=props.id;
console.log(id);
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

return (user !== undefined? user.name:"unknown");
}