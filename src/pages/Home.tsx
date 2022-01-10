import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { GET_USER } from "../gql/home.gql";
import { useLazyQuery } from "@apollo/client";

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onSignIn, {loading, error}] = useLazyQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    onError: error => {
      console.error(error);
      alert(error.message);
    },
    onCompleted: ({result}) => {
      console.log(result);
    }
  });

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
        <Button variant="text" onClick={() => onSignIn({variables: {email, password}})}>Sign In</Button>
        <Button variant="text">
          <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>Sign Up</Link>
        </Button>
        
      </Box>
    </div>
  );
}

export default Home;