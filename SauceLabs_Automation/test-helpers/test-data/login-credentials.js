require('dotenv').config()
export const login_credentials={
    "saucedemoURL": process.env.saucedemoURL,
    "Login": {
        "username": process.env.username,
        "password": process.env.password
    }
}