import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {

    var [fname, setfname] = useState("")
    var [old, newn] = useState("")

    
    const handleinput = (e) => { 
        setfname(e.target.value)
        console.log(fname)
    }

    const showinput = () => {
        newn(fname)
    }


  return (
    <div>
          <Typography variant='h3'>Welcome {old}</Typography><br/><br/>
          <TextField variant='outlined' onChange={handleinput} /><br /><br/><br/>
          <Button variant='outlined' onClick={showinput} >SUBMIT</Button>
      </div>
  )
}

export default Statebasics
