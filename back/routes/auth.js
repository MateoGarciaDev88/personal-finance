const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

// Ruta de registro
router.post("/registro", async (req, res) => {
    const {
        correo,
        contraseña,
        nombreCompleto,
        usuario,
        telefono,
        fechaNacimiento,
        pais,
        genero,
        aceptaTerminos,
    } = req.body;

  // Verifica campos obligatorios
    if (!correo || !contraseña || !nombreCompleto || !usuario) {
        return res.status(400).json({ message: "Campos obligatorios faltantes" });
    }

    try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Insertar usuario
    const query = `INSERT INTO users (correo, contraseña, nombre_completo, usuario, telefono, fecha_nacimiento, pais, genero, acepta_terminos)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        correo,
        hashedPassword,
        nombreCompleto,
        usuario,
        telefono,
        fechaNacimiento,
        pais,
        genero,
        aceptaTerminos,
    ];

    db.query(query, values, (err, result) => {
        if (err) {
        console.error("Error al registrar:", err);
        return res.status(500).json({ message: "Error al registrar usuario" });
        }

        res.status(201).json({ message: "Usuario registrado correctamente" });
    });
    } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
    }
});

module.exports = router;
