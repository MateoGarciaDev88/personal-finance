import { useState } from 'react';
import '/src/index.css';

const FormularioRegistro = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [usuario, setUsuario] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [pais, setPais] = useState("");
    const [genero, setGenero] = useState("");
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const manejarEnvio = async (obj: React.FormEvent<HTMLFormElement>) => {
        obj.preventDefault(); 
        setMensaje(''); 

        if (contraseña !== confirmarContraseña) {
            setMensaje("Las contraseñas no coinciden");
            return; 
        }


        const datosRegistro = {
            correo,
            contraseña,
            nombre_completo: nombreCompleto,
            usuario,
            telefono,
            fecha_nacimiento: fechaNacimiento,
            pais,
            genero,
            acepta_terminos: aceptaTerminos
        };

        try {
            const response = await fetch('http://localhost:3000/auth/registro', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(datosRegistro),
            });

            const data = await response.json(); 

            if (response.ok) { 
                setMensaje(data.message || "Registro exitoso"); 
                // Limpiar formulario
                setCorreo('');
                setContraseña('');
                setConfirmarContraseña('');
                setNombreCompleto('');
                setUsuario('');
                setTelefono('');
                setFechaNacimiento('');
                setPais('');
                setGenero('');
                setAceptaTerminos(false);
            } else { 
                setMensaje(data.message || "Error en el registro"); 
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setMensaje("Error de conexión con el servidor. Inténtalo de nuevo más tarde.");
        }
    };

    return (
        <div className="formulario-registro">
            <h2>Registrarse</h2>
            <form onSubmit={manejarEnvio}>
                <div>
                    <label>Nombre completo:</label>
                    <input 
                        type="text" 
                        value={nombreCompleto} 
                        onChange={(e) => setNombreCompleto(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>Nombre de usuario:</label>
                    <input 
                        type="text" 
                        value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>Correo electrónico:</label>
                    <input 
                        type="email" 
                        value={correo} 
                        onChange={(e) => setCorreo(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>Teléfono:</label>
                    <input 
                        type="tel" 
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>Fecha de nacimiento:</label>
                    <input 
                        type="date" 
                        value={fechaNacimiento} 
                        onChange={(e) => setFechaNacimiento(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>País:</label>
                    <input 
                        type="text" 
                        value={pais} 
                        onChange={(e) => setPais(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>Género:</label>
                    <select 
                        value={genero} 
                        onChange={(e) => setGenero(e.target.value)} 
                        required
                    >
                        <option value="">Seleccione...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input 
                        type="password" 
                        value={contraseña} 
                        onChange={(e) => setContraseña(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>Confirmar contraseña:</label>
                    <input 
                        type="password" 
                        value={confirmarContraseña} 
                        onChange={(e) => setConfirmarContraseña(e.target.value)} 
                        required 
                    />
                </div>

                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={aceptaTerminos} 
                            onChange={(e) => setAceptaTerminos(e.target.checked)} 
                            required 
                        />
                        Acepto los términos y condiciones
                    </label>
                </div>

                <button type="submit">Registrarse</button>
            </form>
            {mensaje && <p className="mensaje-formulario">{mensaje}</p>}
        </div>
    );
}

export default FormularioRegistro;