import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Greet = () => {
    var [string, setstring] = useState("")

    const react = () => {
        setstring("React")

    }

    const angular = () => {
        setstring("Angular")

    }

    const view = () => {
        setstring("View")

    }

    // useEffect (() =>{},[])

    useEffect(() => { react() }, [])
    return (
        <div>
            <Typography variant='h3'>Welcome to {string}</Typography><br /><br />
            <Button variant='outlined' onClick={react} >REACT</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' onClick={angular} >ANGULAR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' onClick={view} >VIEW</Button>

        </div>
    )
}

export default Greet