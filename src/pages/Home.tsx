import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { GET_USER } from "../gql/home.gql";
import { useLazyQuery } from "@apollo/client";
import { useCookies } from "react-cookie";

function Home() {
  const [cookies, setCookies, removeCookie] = useCookies(['test']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onSignIn, {loading, error}] = useLazyQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    onError: error => {
      console.error(error);
      alert(error.message);
    },
    onCompleted: ({getUser}) => {
      console.log(getUser);
      if (getUser) {
        const expireDate = new Date();
        expireDate.setMonth(expireDate.getMonth() + 1);
        alert("로그인 성공!");
        setCookies('test', getUser.email, {path:'/', expires : expireDate});
      } else {
        alert("로그인 실패!")
      }
    }
  });
  const onSignOut = () => {
    console.log('signout');
    removeCookie('test');
    alert("로그아웃 성공!");
  }
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-email-input" label="Email" variant="standard"  value={email} onInput={(e:any) => setEmail(e.target.value)} />
        <TextField id="standard-password-input" type="password" label="Password" variant="standard"  value={password} onInput={(e:any) => setPassword(e.target.value)} />
        <Button variant="text" style={cookies.test !== undefined ? {display: "none"} : {display: ""}}  onClick={() => onSignIn({variables: {email, password}})}>Sign In</Button>
        <Button variant="text" style={cookies.test !== undefined ? {display: ""} : {display: "none"}}  onClick={() => onSignOut()}>Sign Out</Button>
        <Button variant="text">
          <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>Sign Up</Link>
        </Button>
        
      </Box>
    </div>
  );
}

export default Home;