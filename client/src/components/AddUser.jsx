import React from 'react'
import { FormControl,FormGroup,InputLabel,Input } from '@mui/material'

export default function AddUser() {
  return (
    <FormGroup>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input></Input>
    </FormControl>
    <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input></Input>
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input></Input>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input></Input>
    </FormControl>
    </FormGroup>
  )
}
