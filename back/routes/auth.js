import express from 'express';
import bcrypt from 'bcrypt';
import db from '../db.js'; // Asegúrate de que la ruta sea correcta
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'AvionArrancando$$';
const router = express.Router();

router.post('/registro', async (req, res) => {
    try {
        console.log('Datos recibidos en registro:', req.body); // ✅ Para debug
        
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
        const [existeCorreo] = await db.promise().execute(
            'SELECT id FROM users WHERE correo = ?',
            [correo]
        );

        if (existeCorreo.length > 0) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        const [existeUsuario] = await db.promise().execute(
            'SELECT id FROM users WHERE usuario = ?',
            [usuario]
        );

        if (existeUsuario.length > 0) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        }

        const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

        console.log('Insertando usuario en base de datos...');
        
        const [result] = await db.promise().execute(
            `INSERT INTO users (correo, contraseña, nombre_completo, usuario, telefono, fecha_nacimiento, pais, genero, acepta_terminos) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [correo, contraseñaEncriptada, nombre_completo, usuario, telefono, fecha_nacimiento, pais, genero, acepta_terminos]
        );

        console.log('Usuario insertado exitosamente, ID:', result.insertId); 
        res.status(201).json({ 
            message: 'Usuario registrado exitosamente',
            userId: result.insertId 
        });

    } catch (error) {
        console.error('Error detallado en registro:', error); 
        
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ 
                message: 'Ya existe un usuario con estos datos' 
            });
        }
        
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                message: 'Error de conexión a la base de datos' 
            });
        }

        res.status(500).json({ 
            message: 'Error interno del servidor',
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log('Datos recibidos en login:', req.body); 
        
        const { correo, contraseña } = req.body;

        if (!correo || !contraseña) {
            return res.status(400).json({ 
                message: 'Correo y contraseña son obligatorios' 
            });
        }

        const [result] = await db.promise().execute(
            'SELECT * FROM users WHERE correo = ?',
            [correo]
        );

        if (result.length === 0) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        const user = result[0];
        console.log('Usuario encontrado:', user.id, user.correo); 

        const contraseñaValida = await bcrypt.compare(contraseña, user.contraseña);

        if (!contraseñaValida) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign(
            { id: user.id, correo: user.correo }, 
            SECRET_KEY, 
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token,
            user: {
                id: user.id,
                correo: user.correo, 
                usuario: user.usuario, 
                nombre_completo: user.nombre_completo 
            }
        });

    } catch (error) {
        console.error('Error detallado en login:', error); 
        res.status(500).json({ 
            message: 'Error interno del servidor',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

export default router;