import express from 'express';
import User from '../model/userModel';
import {getToken} from '../util';
const route= express.Router();

route.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});


route.post('/register', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  });
  
route.get("/createadmin",async(req,res)=>{
    try {
         
    const user = new User({
        name:'Aman',
        email:'rash@gmail.com',
        password:'12345678',
        isAdmin:true
    });

    const newUser = await user.save();
    res.status(200).send(newUser);
     
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
   
});

export default route;