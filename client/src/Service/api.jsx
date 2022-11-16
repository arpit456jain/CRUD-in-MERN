import axios from 'axios';

const usersUrl = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
        return await axios.post(`${usersUrl}/add`, data);
    }
    catch(err){
        console.error(err);
    }
    
}

export const getUsers = async () => {
    try{
        return await axios.get(`${usersUrl}/all`);
    }
    catch(err){
        console.error(err);
    }
    
}
