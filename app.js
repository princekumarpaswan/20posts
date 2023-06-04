const express = require("express");
require("./src/db/conn")
const app = express();
const router = require("./src/router/post");

const port = process.env.PORT || 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Connection is live at port ${port}`);
})