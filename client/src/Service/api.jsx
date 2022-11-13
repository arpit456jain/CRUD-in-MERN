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
