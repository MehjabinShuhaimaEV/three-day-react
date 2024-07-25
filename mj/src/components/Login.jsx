import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
          <Typography variant='h3'>LOGIN</Typography><br/><br />
          <TextField label="USERNAME" color="secondary" /><br></br><br/><br/>
          <TextField label="PASSWORD" color="secondary" /><br /><br /><br />
          <Button variant="outlined" color="secondary">LOGIN</Button>
    </div>
  )
}

export default Login
