const jwt = require("jsonwebtoken");

async function authArtist(req,res,next) {
    const token = req.cookies.token

    if (!token){
        res.status(401).json({
            message : "unAuthorized "
        })
    }
    try{

        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if (decoded.role != "artist"){
            res.status(403).json({
            message : "you dont have access to create this"
        })
        }
        req.user = decoded;
        next();
        
 
    }catch{
        console.log(err)
        res.status(401).json({
            message : "unAuthorized "
        })
    }
}

async function authUser(req,res,next) {
    const token = req.cookies.token
    if (!token){
        res.status(401).json({
            message : "unAuthorized "
        })
    }
    try{

        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if (decoded.role !== "user" && decoded.role !== "artist"){
            res.status(403).json({
            message : "you dont have access "
        })
        }
        req.user = decoded;
        next();
        
 
    }catch{
        console.log(err)
        res.status(401).json({
            message : "unAuthorized "
        })
    }
}
module.exports = {authArtist,authUser};