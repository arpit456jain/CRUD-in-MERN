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
        return await axios.post(`${usersUrl}/${id}`, data);
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
        console.log("in edit get user",usersUrl,id);
        let res = await axios.get(`${usersUrl}/${id}`);
        console.log("the res i am geetning",res);
        return res;
    }
    catch(err){
        console.error("getting an eerror",err);
    }
    
}
