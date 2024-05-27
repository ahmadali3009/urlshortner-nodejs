let jwt = require('jsonwebtoken');
let secret = "ahmad123@#" 
function setUser(user)
{
   return jwt.sign(
      {
      _id: user._id,
      email: user.email,
      role:user.role,
      }, secret)
}

function getUser(token)
{if(!token) return null;
   
  try {
   return jwt.verify(token, secret);
 } catch (error) {
   console.error('Error while verifying token:', error);
   return null; // Handle token verification error
 }
}

module.exports = {setUser , getUser}