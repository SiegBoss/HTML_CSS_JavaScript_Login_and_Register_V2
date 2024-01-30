const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const router = express.Router();

const collection = mongoose.model('users');

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    const user = await collection.findOne({ username });

    if (!user) {

        console.log('Usuario no encontrado');
        return res.status(400).json({ error: 'Usuario no encontrado' });

    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {

        console.log('Contraseña incorrecta');
        return res.status(400).json({ error: 'Contraseña incorrecta' });

    }
    
    console.log('Inicio de sesión exitoso');
    res.status(200).send('Inicio de sesión exitoso');
});

module.exports = router;
