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

export const editUser = async (data,id) => {
    try{
        return await axios.put(`${usersUrl}/${id}`, data);
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

export const getUser = async (id) => {
    try{
        
        let res = await axios.get(`${usersUrl}/${id}`);
        
        return res;
    }
    catch(err){
        console.error("getting an eerror",err);
    }
    
}

export const deleteUser = async (id) => {
    try{
        console.log("deleting the user",id);
        let res = await axios.delete(`${usersUrl}/delete/${id}`);
    
        return res;
    }
    catch(err){
        console.error("getting an eerror",err);
    }
    
}
