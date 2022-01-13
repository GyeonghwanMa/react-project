import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useCookies } from "react-cookie";

function Navigation() {
  const [cookies, setCookies, removeCookie] = useCookies(['test']);
  return (
    <div className="nav">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Button>
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Home</Link>
        </Button>
        <Button style={cookies.test === undefined ? {display: 'none'} : {display: ''}}>
          <Link to="/modify" style={{ textDecoration: 'none', color: '#1976d2' }}>Modify</Link>
        </Button>
      </Box>
    </div>
  );
}

export default Navigation;