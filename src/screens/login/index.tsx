// Componente de inicio de sesión

import { useState } from 'react';
import '/src/index.css';
// import DashboardBox from '../../components/DashboardBox';
// import { Palette } from '@mui/icons-material';
// import { useTheme } from '@mui/material';


const FormularioLogin = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    // const {Palette} = useTheme();
return (
    // <DashboardBox
    //     height={"20%"}
    //     width={"20%"}
    //     color={Palette.grey[300]}
    //     >
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
    // </DashboardBox>

    );
};

export default FormularioLogin;
