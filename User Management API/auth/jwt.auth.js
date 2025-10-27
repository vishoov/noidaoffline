const jwt = require("jsonwebtoken");

const secretKey = "rahulbhaikuchkehrahehainparkisikobatananahi"

const createToken = (user)=>{
    try{
        const token = jwt.sign(
            //payload
            {
                email:user.email,
                id:user.id
            },
            secretKey,
            //options
            {
                expiresIn:"1d",
                issuer:"user_management_api"
            }
        )
        return token;
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    createToken
}