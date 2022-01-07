import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Home() {
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
        <TextField id="standard-email-input" label="Email" variant="standard"/>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-password-input" type="password" label="Password" variant="standard" />
        <Button variant="text">Sign In</Button>
        <Button variant="text">
          <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>Sign Up</Link>
        </Button>
        
      </Box>
    </div>
  );
}

export default Home;