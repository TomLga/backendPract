// getting all users 
// @route GET /
// @acess public 

// get
const getUsers = (req, res) => {
    res.json({
        msg: "getting all users"
    }); 
}
// post
const createUser = (req, res) => {
    console.log("this is the req body", req.body);
    const{userId,
        firstname,
        lastName,
        gender,
        userDOB,
        emailAdd,
        userPass,
        profileUrl}= req.body

         if (!userId,
            !firstname,
            !lastName,
            !gender,
            !userDOB,
            !emailAdd,
            !userPass,
            !profileUrl)
         {
            res.status(400);
            throw new Error("all filds are n=mandatory ")
         }


       



    res.json({
        msg: "create user"
    });
}
// put
 const updateUser=(req, res) => {
    res.json({
        msg: `update user for ${req.params.id}`
    });
}

// delete 
const delUser= (req, res) => {
    res.json({
        msg: `deleted user ${req.params.id}`
    });
}

// get one user
const getUser = (req, res) => {
    res.json({
        msg: `getting user ${req.params.id}`
    });
}



module.exports = {
    getUsers, 
    createUser,
    updateUser,
    delUser,
    getUser
}