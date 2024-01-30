const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const router = express.Router();
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    user : String,
    username: String,
    email: String,
    password: String,
    confirm_password : String,
});

const User = mongoose.model('users', userSchema);

router.post('/register', async (req, res) => {
    const data = req.body;
    data.password = await bcrypt.hash(data.password, saltRounds);

    const newUser = new User(data);

    try {
        await newUser.save();
        console.log("Usuario Registrado Exitosamente");
        res.status(200).send('Usuario Registrado Exitosamente');

    } catch (err) {
        
        console.log('Error al Registrar el Usuario:', err.message);
        res.status(500).send('Error al Registrar el Usuario');
    }
});

module.exports = router;
