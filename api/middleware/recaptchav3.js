const axios = require("axios")

const recaptcha = async (req, res, next) => {
    const { token } = req.body
    console.log(token)
    const secret = process.env.RECAPTCHA_SECRET_KEY
    console.log(secret)
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`

    try {
        const response = await axios.post(verifyUrl)
        console.log(response.data)
        if (response.data.success) {
            // Valid reCAPTCHA token, handle your logic here
            req.recaptcha = {
                state: true,
                message: 'reCAPTCHA verification successful'
            } 
        } else {
            req.recaptcha = {
                state: false,
                message: 'reCAPTCHA verification failed'
            }
        }

        next()
    } catch (error) {
        req.recaptcha = {
            state: false,
            message: 'reCAPTCHA verification failed',
            error
        }
        next()
    }
}

module.exports = recaptcha