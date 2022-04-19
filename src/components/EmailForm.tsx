import { SEND_EMAIL } from "../gql/study.gql";
import React from 'react';
import { useLazyQuery } from "@apollo/client";

function EmailForm() {
  const [sendMail, {loading, error}] = useLazyQuery(SEND_EMAIL, {
    fetchPolicy: "cache-and-network",
    onError: (error: { message: any; }) => {
      console.error(error);
      alert(error.message);
    },
    onCompleted: () => {
      console.log("SUCCESS!");
    }
  });
  return (
    <div>
      <div>
        <button onClick={() => sendMail()}>메일보내기</button>
      </div>
    </div>
  );
}

export default EmailForm;