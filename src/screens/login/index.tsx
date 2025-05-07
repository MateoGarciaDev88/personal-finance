// Componente de inicio de sesión

import { useState } from 'react';
import '/src/index.css';


const FormularioLogin = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

return (
    <div className="formulario-login">
        <h2>Iniciar sesión</h2>
        <form onSubmit={()=>console.log(correo, contraseña)}>
        <div>
            <label>Correo electrónico:</label>
            <input type="email" value={correo} onChange={(obj) => setCorreo(obj.target.value)} 
            required/>
        </div>
        <div>
            <label>Contraseña:</label>
            <input type="password" value={contraseña} onChange={(obj) => setContraseña(obj.target.value)} required/>
        </div>
        <button type="submit">Iniciar sesión</button>
        <div className="registro-link">
            ¿No tienes cuenta?{' '}
            <a href="/registro" style={{ color: '#007bff', textDecoration: 'underline' }}>
            Regístrate aquí
            </a>
        </div>
        </form>
    </div>
    );
};

export default FormularioLogin;
