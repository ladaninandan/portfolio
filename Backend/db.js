const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/portfolio";

const dbconnect = async () => {
    const db = await mongoose.connect(url);
    if (!db) {
        console.log("err");
    } else {
        console.log("connect")
    }
};
dbconnect();