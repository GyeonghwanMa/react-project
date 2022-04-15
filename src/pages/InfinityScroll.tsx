import React, { useEffect, useState } from "react";
import { GET_USERS_INIT } from "../gql/InfinityScroll.gql";
import { useLazyQuery } from "@apollo/client";
import UserList from "../components/UserList";

function InfinityScroll() {
  const [users, setUsers] = useState([]);
  const [getUsersInit, {loading, error}] = useLazyQuery(GET_USERS_INIT, {
    fetchPolicy: "cache-and-network",
    onError: error => {
      console.error(error);
      alert(error.message);
    },
    onCompleted: ({getUsersInit}) => {
      setUsers(getUsersInit);
    }
  });

  useEffect(() => {
    getUsersInit()
  }, []);

  return (
    <div>
      <UserList userData={users} />
    </div>
  );
}

export default InfinityScroll;