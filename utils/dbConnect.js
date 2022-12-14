const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.mongodbAtlas, {
        dbName:"cooking-bird"
    })
        .then(() => {
        console.log('db connected successfully'.bgGreen.white.bold)
        }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = dbConnect;