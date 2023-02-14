const  bcrypt = require ("bcrypt")
const jwt = require('jsonwebtoken');

const users = require("../schema/post")

const getAll = async (req, res) => {
    try {
      const allUser = await users.find();
      res.status(200).json({
        message: "User found successfully",
        data: allUser,
        count: allUser.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// create user without hash pass
 const createUser = async (req, res) =>{
    try {
    
    const {name, email,password} = req.body;
    const newUser =  new users({name, email,password})
    await bcrypt.hash(newUser.password, 10, (error, hash) =>{
      if (error) {
        console.log(error);
        const responseObject = {error: 'Internal Error'}
      }else{
        newUser.password = hash;
        newUser.save()
        responseObject = {message: `user ${newUser.name} successfull`, newUser}
      }
    });
    res
    .status(201)
    .json({
        message: "User created successfully", 
        // data: newUser
    })
} catch (error) {
    console.log(error)
}
};

// post without hash
// const createUser = async (req, res) => {
//   try {
//     const { name, email,password } = req.body;
//     const newPost = new users({ name, email,password });
//     const createdPost = await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post created successfully", data: createdPost });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const updateUser = async (req, res) => {
    try {
      // Getting the post from db
      const user = await users.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!user) res.status(404).json({ error: "No User found" });
  
      // Editing provided fields
      const editedUser = await post.set({ ...req.body });
  
      // Saving the updated post
      const result = await editedUser.save();
  
      // Retuning the response
      res.status(200).json({ message: "User edited successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteUser = async (req, res) => {
    try {
      // Getting the post from db
      const user = await users.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!user) res.status(404).json({ error: "No User found" });
  
      // Deleting the post
      await post.remove();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const login = async (req, res) =>{
    let responseObject, status
    const data = req.body
    // var email = req.body.email;
    // var password = req.body.password;
    const {email,password} = req.body; 
    const newUser = await users.findOne({email : data.email}) 
    if (!newUser) return res.status(400).json({error: 'Invalid email or password'})
    bcrypt.compare(data.password, newUser.password, (err, verified)=>{
      if (err) {
        responseObject = {error: 'Internal Error'}
        status =500
      }
      if (verified) {
        const token = jwt.sign({email: newUser.email}, 'mysecrete', {expiresIn: 60*5})
        responseObject = {message: `welcome ${newUser.name}`, token}
        status = 200
      } else {
        responseObject = {error: 'Invalid email or password'}
        status = 400
      }
      res.status(status).json(responseObject)
    })
  } 

module.exports = {getAll, createUser, updateUser, deleteUser,login}