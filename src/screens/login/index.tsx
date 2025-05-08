import { useState } from 'react';
import './login.css'; 

const FormularioLogin = () => {
const [correo, setCorreo] = useState('');
const [contraseña, setContraseña] = useState('');

return (
    <div className="login-page">
    <div className="formulario-login">
        <h2>Iniciar sesión</h2>
        <form onSubmit={() => console.log(correo, contraseña)}>
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
            <label>Contraseña:</label>
            <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            />
        </div>
        <button type="submit">Iniciar sesión</button>
        <div className="registro-link">
            ¿No tienes cuenta?{' '}
            <a href="/registro">
            Regístrate aquí
            </a>
        </div>
        </form>
    </div>
    </div>
);
};

export default FormularioLogin;
