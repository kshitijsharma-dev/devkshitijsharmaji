const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://kshitijsharma:0XHt37k1i0nbo7B9@kshitijcluster.bccar.mongodb.net/"
    );
};



module.exports = connectDB;






