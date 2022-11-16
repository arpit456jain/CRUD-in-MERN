import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import {getUsers}   from '../Service/api'
import {Link} from 'react-router-dom';
export default function AllUsres() {

  const [users , setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
}, []);

const getAllUsers = async () => {
  let response = await getUsers();
  console.log(response);
  setUsers(response.data);
}
  return (
    <Table>
      <TableHead>
                 <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Edit/Delete</TableCell>
          
                    </TableRow>
      </TableHead>
      <TableBody>
          {users.map((row) => (
            <TableRow>  
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${row._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
  
  )
}
