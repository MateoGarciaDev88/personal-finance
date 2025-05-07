import  { useState } from 'react';
import '/src/index.css';


type Props = {
    alRegistrarse: (correo: string, contraseña: string, confirmarContraseña: string) => void;
};

const FormularioRegistro : React.FC<Props> = ({alRegistrarse}) => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');

    const manejarEnvio = (obj: React.FormEvent<HTMLFormElement>) => {
    obj.preventDefault();
    if (contraseña === confirmarContraseña) {
        alRegistrarse(correo, contraseña, confirmarContraseña); 
    } else {
        alert("Las contraseñas no coinciden");
    }
};

    return (
    <div className="formulario-registro">
        <h2>Registrarse</h2>
        <form onSubmit={manejarEnvio}>
        <div>
            <label>Correo electrónico:</label>
            <input 
            type="email" 
            value={correo} 
            onChange={(obj) => setCorreo(obj.target.value)} 
            required
        />
        </div>
        <div>
            <label>Contraseña:</label>
            <input 
            type="password" 
            value={contraseña} 
            onChange={(obj) => setContraseña(obj.target.value)} 
            required
        />
        </div>
        <div>
            <label>Confirmar contraseña:</label>
            <input 
            type="password" 
            value={confirmarContraseña} 
            onChange={(obj) => setConfirmarContraseña(obj.target.value)} 
            required
        />
        </div>
        <button type="submit">Registrarse</button>
        </form>
    </div>
    );
};

export default FormularioRegistro;