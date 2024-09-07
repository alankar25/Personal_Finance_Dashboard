const mongoose = require('mongoose');
require('dotenv').config();
const connectDB =async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db Connected');
    }
    catch(error){
        console.log('DB Connection Error');
        process.exit(1);
    }
}

module.exports = connectDB;