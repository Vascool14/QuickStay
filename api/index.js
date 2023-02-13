const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
require('dotenv').config()
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser');
const app = express();

const SECRET = bcrypt.genSaltSync(10);
const jwtSecret = 'fsgsegwebnmhbolviyrdcjfmyjhlkh';

app.use(express.json());
app.use(CookieParser());
app.use(cors({  credentials: true,   origin: 'http://localhost:5173',}));

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
            jwt.sign({email: userDoc.email, id: userDoc._id}, jwtSecret, {},
                (err, token) => {
                    if(err) throw err;
                    res.cookie('token', token).json(userDoc);
                }
            );
        }
        else{ 
            res.status(422).json('password not ok');
        }
    }
    else{
        res.json('not found');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    res.json(token);
});

app.listen(4000);