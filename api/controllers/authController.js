const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/User')
const tokenGenerator = require('../lib/tokenGenerator')

// @desc login
// @route POST /auth
// @access Public
const login = async (req, res) => {
  const { username, password } = req.body

  // confirm data
  if (!username || !password){
    return res.status(400).json({ message: 'All fields required'})
  }

  // check user
  const user = await User.findOne({ username }).exec()
  if (!user){
    return res.status(401).json({ message: "Unauthorized" })
  }

  // check password
  const match = await bcrypt.compare(password, user.password)
  if (!match){
    return res.status(401).json({ message: "Unauthorized" })
  }

  // create accessToken
  const accessToken = tokenGenerator.createAccessToken(user)
  // create refreshToken
  const refreshToken = tokenGenerator.createRefreshToken(user)

  // Create secure cookie with refresh token 
  res.cookie('jwt', refreshToken, {
      httpOnly: true, // accessible only by web server
      secure: true, //https
      sameSite: 'None', //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expire in
  })

  // send accessToken containing userInfo
  res.json( { accessToken })

}

// @desc refresh
// @route GET /auth/refresh
// @access Public
const refresh = async (req, res) => {
  const cookies = req.cookies

  if(!cookies?.jwt){
    return res.status(401).json({ message: "Unauthorized" })
  }

  const refreshToken = cookies.jwt

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden'})
      }

      const user = await User.findOne({ username: decoded.username })
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      
      const accessToken = tokenGenerator.createAccessToken(user)
      res.json({ accessToken })
    }
  )
}


// @desc logout
// @route POST /auth/logout
// @access Public
const logout = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt){
    return res.sendStatus(204) // no content
  }

  res.clearCookie('jwt', {
    httpOnly: true,
    secure: true, 
    sameSite: 'None'
  })

  res.json({ message: 'Cookie cleared'})
}

// @desc validate accessTokne
// @route POST /auth/logout
// @access Private
const validate = async (req, res) => {
  return res.status(200).json({message: "accessToken is valid"})
}

module.exports = {
  login,
  refresh,
  logout,
  validate
}

