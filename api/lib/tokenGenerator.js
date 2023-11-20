const jwt = require('jsonwebtoken')

const tokenGenerator = {}

tokenGenerator.createAccessToken = (user, expiresIn='15min') => {
  return jwt.sign(
    {
      "UserInfo": {
        "username": user.username,
        "userId": user._id
      }
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: expiresIn }
  )
}

tokenGenerator.createRefreshToken = (user, expiresIn='1d') => {
  return jwt.sign(
    { "username": user.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: expiresIn }
  )
}

module.exports = tokenGenerator