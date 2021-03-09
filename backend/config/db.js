require('dotenv').config();
const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(chalk.bold.italic.green("MongoDB connection with SUCCESS"));
        

    } catch (erorr) {
        console.error(chalk.bold.italic.red("MongoDB connection FAIL"));
        process.exit(1);
    }
}

module.exports = connectDB;