const  bcrypt = require ("bcrypt")
const jwt = ('jsonwebtoken');

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
//  const createUser = async (req, res) =>{
//     try {
//     const {name, email,password} = req.body;
//     const newUser = new users({name, email,password})
//     const createdUser = await newUser.save()
//     res
//     .status(201)
//     .json({
//         message: "User created successfully", 
//         data: createdUser
//     })
// } catch (error) {
//     console.log(error)
// }
// };

//create user with a hash
const createUser = async (req, res) =>{

  try {
  let responseObject;
  const {name, email,password} = req.body;
  const newUser = new users({name, email,password})
  bcrypt.hash(newUser.password, 10, (error, hash) =>{
    if (error) {
      console.log(error);
      responseObject = {error: 'Internal Error'}
    }else{
      newUser.password = hash;
      newUser.save(newUser);
      responseObject = {message: `user ${newUser.name} successfull`, newUser}
    }
    res.status(201).json(responseObject)
  })
  newUser.save(newUser)
  res
  .status(201)
  .json({
      message: "User created successfully", 
      data: createdUser
  })

} catch (error) {
  console.log(error)
}
};

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
  

module.exports = {getAll, createUser,updateUser,deleteUser}