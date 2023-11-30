const User = require("../models/user-model")
const home = async (req, res) => {
    try {
        res.status(200).json("Hi from Controllers")
    } catch (error) {
        res.status(400).json(`An error Occurs ${error}`)
        console.log(error);
        
    }
};
// register 
const register = async (req, res)=> {
    try {
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});

        if (userExist) {
            return res.status(400).json({msg: "Email already Exist"})
        }

        const userCreated = await User.create({ username, email, phone, password })

        res.status(200).json({userCreated })
    } catch (error) {
        res.status(500).json(`An error Occurs ${error}`)
        console.log(error);
        
    }
}



module.exports = { home, register};