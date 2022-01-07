import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navigation() {
  return (
    <div className="nav">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Button>
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Home</Link>
        </Button>
        {/* <Link to="/about">About</Link> */}
      </Box>
    </div>
  );
}

export default Navigation;