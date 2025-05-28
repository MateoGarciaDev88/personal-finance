import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../db.js';

const router = express.Router();

router.post('/registro', async (req, res) => {
    try {
        const {
            correo,
            contraseña,
            nombre_completo,
            usuario,
            telefono,
            fecha_nacimiento,
            pais,
            genero,
            acepta_terminos
        } = req.body;

        const [existeCorreo] = await pool.promise().execute(
            'SELECT id FROM users WHERE correo = ?',
            [correo]
        );

        if (existeCorreo.length > 0) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        const [existeUsuario] = await pool.promise().execute(
            'SELECT id FROM users WHERE usuario = ?',
            [usuario]
        );

        if (existeUsuario.length > 0) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        }

        const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

        await pool.promise().execute(
            `INSERT INTO users (correo, contraseña, nombre_completo, usuario, telefono, fecha_nacimiento, pais, genero, acepta_terminos) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [correo, contraseñaEncriptada, nombre_completo, usuario, telefono, fecha_nacimiento, pais, genero, acepta_terminos]
        );

        res.status(201).json({ message: 'Usuario registrado exitosamente' });

    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

export default router;