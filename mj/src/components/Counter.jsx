import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, setcount] = useState(0)

    const add = () => { setcount(count + 1) }

    const sub = () => { setcount(count - 1) }
    return (
        <div>
            <Typography variant='h3'>Count: {count}</Typography><br /><br />
            <Button variant='outlined' onClick={add} >ADD</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' onClick={sub} >SUB</Button>

        </div>
    )
}

export default Counter