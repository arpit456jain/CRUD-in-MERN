import { useState,useEffect } from 'react';
import { FormControl,FormGroup,InputLabel,Input, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import { getUser,editUser } from '../Service/api';
import { useNavigate,useParams } from 'react-router-dom';
const Container = styled(FormGroup)`
width:50%;
margin : 5% auto 0 auto;
& > div {
  margin : 20px;
}
`
const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}
export default function EditUser() {
  const [user, setUser] = useState(initialValue);
    
    const navigate = useNavigate();
    const {id} = useParams();
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
        await editUser(user,id);
        navigate('/all');

    }
    

  useEffect(() => {
    getUserData();
}, []);

const getUserData = async () => {
  let response = await getUser(id);
  console.log("responsse in edit",response);
  setUser(response.data[0]);
  console.log("new user data",user);
}
  return (
    <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
  )
}
