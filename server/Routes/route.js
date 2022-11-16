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

router.get('/all',async(request,response)=>{
    
    try{
        // const users = await postUser.find({username: 'jfyjkk'});
        const users = await postUser.find({});
        response.status(200).json(users);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }

})

router.get('/:id',async(request,response)=>{
    
    try{
        // const users = await postUser.find({username: 'jfyjkk'});
        const user = await postUser.find({_id:request.params.id});
        // const user = await postUser.findById(request.params.id);
        response.status(200).json(user);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }

})
router.put('/:id',async(request,response)=>{
    const user = request.body;
    const newUser = new postUser(user);
    
    
    try{
        await postUser.updateOne({_id : request.params.id}, newUser);
        
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }

})
export default router;

router.delete('/delete/:id',async(request,response)=>{
    
    try{
        // const users = await postUser.find({username: 'jfyjkk'});
        await postUser.remove({_id : request.params.id});
        response.status(200).json(users);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }

})