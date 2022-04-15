import React from "react";

function UserInfo({_id, email, name}: any) {
    return (
        <div>
            <p>_id: {_id}</p>
            <p>email: {email}</p>
            <p>name: {name}</p>
        </div>
    )
}

export default UserInfo;