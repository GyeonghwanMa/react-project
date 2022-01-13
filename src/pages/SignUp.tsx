import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { POST_USER } from "../gql/signup.gql";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [postUserMutation] = useMutation(POST_USER);

  const onSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const {
        data: { postUser },
      } = await postUserMutation({
        variables: {
          email,
          password,
          name,
        },
      });
      if (postUser) {
        alert("회원가입 성공!");
        navigate("/");
      }
    } catch (error: any) {
      console.error(`onSignUp Error = ${error}`);
    }
  }

  return (
    <div>
      <Box
        onSubmit={onSignUp}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-email-input" label="Email" variant="standard" value={email} onInput={(e:any) => setEmail(e.target.value)} />
        <TextField id="standard-password-input" type="password" label="Password" variant="standard" value={password} onInput={(e:any) => setPassword(e.target.value)}  />
        <TextField id="standard-name-input" label="Name" variant="standard" value={name} onInput={(e:any) => setName(e.target.value)}  />
        <Button variant="text" type="submit">Sign Up</Button>
      </Box>
    </div>
  );
}

export default SignUp;