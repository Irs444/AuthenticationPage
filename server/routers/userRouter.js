const express = require("express")
const router = express.Router()
// const {comparePassword} = require("../model/userModel")

const Model =  require("../model/userModel")

router.post("/signup", (req, res) => {
    console.log(req.body);
   new Model(req.body).save()

   .then((result) => {
    res.json(result)
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
    
   });
});

router.post("/signin" ,(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).send({ message: "must provide email and password 1" });
    }
    Model.findOne({ email })
    .then(user => {
        if (!user) {
            return res.status(401).send({ message: "must provide email and password 2" });
        }
        return user.comparePassword(password)
            .then(isMatch => {
                if (isMatch) {
                    res.json(user);
                    console.log("user loggedIn");
                } else {
                    res.status(401).send({ message: "must provide email and password 3" });
                }
            });
    })
    .catch(err => {
        res.status(500).send({ message: "internal server error" });
    });
})







module.exports = router