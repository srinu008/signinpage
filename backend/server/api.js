var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.get("/user", (req, res) => {
    mongoClient.connect(url)
        .then((obj) => {
            var database = obj.db("Riseslabs")
            database.collection("User").find({}).toArray().then((docu) => {
                res.send(docu)
                res.end();
            })
                .catch((err) => {
                    console.log(err)
                })
        })
})

app.post("/customerregister", (req, res) => {
    var userInfo = {
        "Fullname": req.body.Fullname,
        "Username": req.body.Username,
        "Email": req.body.Email,
        "Password": req.body.Password,
        "Conform Password": req.body.Password

    }
    mongoClient.connect(url)
        .then((obj) => {
            var database = obj.db("Riseslabs")
            database.collection("User").insertOne(userInfo)
                .then(() => {
                    res.redirect("/user")
                })

        })
})
app.listen(5000);
console.log(`server running :http://127.0.0.1:5000`)