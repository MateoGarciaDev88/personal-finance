import { useState } from "react";
import "/src/index.css";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";

type Props = {
  correo: string;
  contraseña: string;
  confirmarContraseña: string;
  nombreCompleto: string;
  usuario: string;
  telefono: string;
  fechaNacimiento: string;
  pais: string;
  genero: string;
  aceptaTerminos: boolean;
};

const FormularioRegistro = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [usuario, setUsuario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [pais, setPais] = useState("");
  const [genero, setGenero] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

	const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const manejarEnvio = (obj: React.FormEvent<HTMLFormElement>) => {
    obj.preventDefault();
    if (contraseña === confirmarContraseña) {
      console.log("Registro exitoso:", { correo, contraseña });
      alert("Registro exitoso");
    } else {
      alert("Las contraseñas no coinciden");
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
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
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
    </div>
  );
};

export default FormularioRegistro;
