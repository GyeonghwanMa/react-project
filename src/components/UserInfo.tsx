import React from "react";

function UserInfo({_id, email, name}: any) {
    return (
        <div>
            <div style={{border: "1px solid grey", borderRadius: 10, padding: 10, margin: 10}}>
                <p>_id: {_id}</p>
                <p>email: {email}</p>
                <p>name: {name}</p>
            </div>
        </div>
    )
}

export default UserInfo;