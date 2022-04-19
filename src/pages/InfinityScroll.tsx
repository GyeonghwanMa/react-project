import React, { useCallback, useEffect, useState } from "react";
import { GET_USERS_INIT, GET_USERS } from "../gql/infinityScroll.gql";
import { useLazyQuery } from "@apollo/client";
import UserList from "../components/UserList";

function InfinityScroll() {
  const [users, setUsers] = useState<any>([]);
  const [lastId, setLastId] = useState("");
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false);
  const [isExistMore, setIsExistMore] = useState<boolean>(true);
  const [getUsersInit, {loading, error}] = useLazyQuery(GET_USERS_INIT, {
    fetchPolicy: "cache-and-network",
    onError: error => {
      console.error(error);
      alert(error.message);
    },
    onCompleted: ({getUsersInit}) => {
      setUsers(getUsersInit);
      setLastId(getUsersInit[getUsersInit.length - 1]._id);
    }
  });
  const [getUsers, {loading: loading2, error: error2}] = useLazyQuery(GET_USERS, {
    fetchPolicy: "cache-and-network",
    onError: error => {
      console.error(JSON.stringify(error, null, 2))
      alert(error.message);
    },
    onCompleted: ({getUsers}) => {
      if (getUsers.length < 20) setIsExistMore(false);
      setIsUsersLoading(false);

      setLastId(getUsers[getUsers.length - 1]._id);
      setUsers([...users, ...getUsers]);
    }
  });

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)
    
    const { scrollHeight } = document.body;
    // 브라우저 총 내용의 크기 (스크롤을 포함한다)
    
    const { scrollTop } = document.documentElement;
    // 현재 스크롤바의 위치
    
    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.
      if (isExistMore) {
        setIsUsersLoading(true);
        getUsers({ variables: { lastId } });
      } 

    }
  }, [lastId]);

  useEffect(() => {
    getUsersInit()
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
    
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
    };
  }, [handleScroll]);

  return (
    <div>
      <UserList userData={users} />
    </div>
  );
}

export default InfinityScroll;