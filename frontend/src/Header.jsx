import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
export default function Header() {
  const cartCount = 3;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} sm={4}>
           
              <Typography variant="h6" component="div">
                ECOMMERCE APP
              </Typography>
            </Grid>
            <Grid item xs={6} sm={8} container justifyContent="flex-end">
              <NavLink to="/category" variant="h6" style={{ textDecoration: 'none', color: 'inherit', fontSize:"15px", margin: "0 10px" }}>
                Home
              </NavLink>
              <NavLink to="/category" variant="h6" style={{ textDecoration: 'none', color: 'inherit', fontSize:"15px", margin: "0 10px" }}>
                Category
              </NavLink>
              <NavLink to="/login" variant="h6" style={{ textDecoration: 'none', color: 'inherit', fontSize:"15px", margin: "0 10px" }}>
                Login
              </NavLink>
              <NavLink to="/register" variant="h6" style={{ textDecoration: 'none', color: 'inherit', fontSize:"15px", margin: "0 10px" }}>
                Register
              </NavLink>
              <NavLink to="/cart" variant="h6" style={{ textDecoration: 'none', color: 'inherit', fontSize:"15px", margin: "0 10px" }}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon/>
                </Badge>
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
