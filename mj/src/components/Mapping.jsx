import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var [name, setname] = useState(
        [
            { "fname": "Fasna", "age": 23 },
            { "fname": "Sheri", "age": 22 },
            { "fname": "Anshee", "age": 24 },
            { "fname": "Razee", "age": 23 }
        ]
    )

  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell>AGE</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {name.map(( val )=>{
                          return (
                              <TableRow>
                                  <TableCell>{val.fname}</TableCell>
                                  <TableCell>{val.age} </TableCell>
                              </TableRow>
                          )
                          
                      })}
                      
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping