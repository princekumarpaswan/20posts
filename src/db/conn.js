const mongoose = require("mongoose");


mongoose.set('strictQuery', false)


mongoose.connect("mongodb://localhost:27017/posts20", {
    useUnifiedTopology: true
}).then(() => {
    console.log("Connectio is sucessFul");
}).catch((e) => {
    console.log("No connection", e);
})