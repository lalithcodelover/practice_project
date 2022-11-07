import React from "react";

function UsersList(props) {


    return (
        <div>
            <ul>
                {props.users.map((user)=>{
                    return (
                    <li key={user.key}>{user.Username} {user.Age}</li>               ) })}
            </ul>
        </div>
    )
}

export default UsersList