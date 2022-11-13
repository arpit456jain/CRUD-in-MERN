import express,{Router} from 'express';
import postUser from '../Database/usermodel.js'
const router = express.Router();
router.get('/add',()=>{
    console.log("Hello get");
})
router.post('/add',async(request,response)=>{
    const user = request.body;
    
    const newUser = new postUser(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }

})

export default router;