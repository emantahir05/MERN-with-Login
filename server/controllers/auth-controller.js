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
        res.status(200).json({message: req.body})
    } catch (error) {
        res.status(400).json(`An error Occurs ${error}`)
        console.log(error);
        
    }
}



module.exports = { home, register};