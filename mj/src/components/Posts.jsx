import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Posts = () => {
    var [post, setpost] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data)
            setpost(response.data)
        })
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>TITLE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map((val, i) => {
                            return (
                                <TableRow>
                                    <TableCell key={i}>{val.id}</TableCell>
                                    <TableCell key={i}> {val.title}</TableCell>
                                </TableRow>
                            )

                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Posts