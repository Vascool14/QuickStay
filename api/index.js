const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
require('dotenv').config()
const app = express();

const SECRET = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const userDoc = await User.create({ 
            name, 
            email, 
            password: bcrypt.hashSync(password, SECRET)
        })
        res.json(userDoc);
    }
    catch(e){
        res.status(422).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            res.json('password ok');
        }
        else{ 
            res.status(422).json('password not ok');
        }
    }
    else{
        res.json('not found');
    }
});

app.listen(4000);