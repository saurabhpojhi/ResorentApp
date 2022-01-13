const express = require("express");
const cors = require("cors");
require('./db/config');


const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());




app.get("/register", async (req,res)=>{
    let user= new User(req.body);
    const result = await user.save();
    res.send(result);
})



app.post("/register", async (req,res)=>{
    const user= new User(req.body);
    const result = await user.save();
    res.send(result);
})

app.listen(5000);