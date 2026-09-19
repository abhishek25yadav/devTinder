const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.get("/", (req, res) => {
    res.send("Namaste Abhishek!");
});

app.get("/hello", (req, res) => {
    res.send("Hello hello hello!");
});

app.get("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});
app.get("/getUserData", (req, res, next) => {

    try {

        throw new Error("Something went wrong");

        res.send("User Data Sent");

    } catch (err) {

        next(err);

    }

});

app.use((err, req, res, next) => {

    console.log(err);

    res.status(500).send("Something went wrong");

});

app.listen(7777, () => {
    console.log("server is successfully listening on port 7777");
});