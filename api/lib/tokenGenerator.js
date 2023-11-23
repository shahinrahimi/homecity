const jwt = require('jsonwebtoken')

const tokenGenerator = {}

// will send by api endpoint as json object
tokenGenerator.createAccessToken = (user, expiresIn='15min') => {
  return jwt.sign(
    {
      "userInfo": {
        "username": user.username,
        "userId": user._id
      }
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: expiresIn }
  )
}

// will send store in cookies
tokenGenerator.createRefreshToken = (user, expiresIn='1d') => {
  return jwt.sign(
    // for securit
    { "username": user.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: expiresIn }
  )
}

module.exports = tokenGenerator