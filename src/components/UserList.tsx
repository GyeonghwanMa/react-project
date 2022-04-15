import React from "react";
import UserInfo from "./UserInfo";

function UserList({userData}: any) {
    console.log(userData)
    return (
        <div>
            {userData.map((user: any) => (
                <UserInfo 
                  key={user._id}
                  email={user.email}
                  name={user.name}
                />
            ))}
        </div>
    )
}

export default UserList;