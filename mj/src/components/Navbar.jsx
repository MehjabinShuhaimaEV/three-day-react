import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar >
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>App</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/sign'><Button variant="contained" color="inherit" style={{ color: 'black' }}> Sign Up</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/login'><Button variant="contained" color="inherit" style={{ color: 'black' }}> LOGIN</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/state'><Button variant="contained" color="inherit" style={{ color: 'black' }}> STATE</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/count'><Button variant="contained" color="inherit" style={{ color: 'black' }}> COUNT</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/greet'><Button variant="contained" color="inherit" style={{ color: 'black' }}> GREET</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/map'><Button variant="contained" color="inherit" style={{ color: 'black' }}> TABLE</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/api'><Button variant="contained" color="inherit" style={{ color: 'black' }}> API</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/post'><Button variant="contained" color="inherit" style={{ color: 'black' }}> POST</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/poke'><Button variant="contained" color="inherit" style={{ color: 'black' }}> POKE</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
