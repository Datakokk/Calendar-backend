const { default: mongoose } = require("mongoose");

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB_online')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error when initializin BD');
    }
}

module.exports = {
    dbConnection,
}