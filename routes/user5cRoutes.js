const express=require('express');
const router=express.Router();
const user5c=require('../models/user5c');

//creamos un ednpoint para obtener a todos los usuarios
//get 
router.get('/users', async (req,res)=>{
    try{
        const users=await user5c.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

// Endpoint para crear un nuevo usuario
router.post('/users', async (req, res) => {
  const user = new user5c({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
