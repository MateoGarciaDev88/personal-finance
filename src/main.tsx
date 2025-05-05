import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FormularioLogin from './screens/login/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <FormularioLogin IniciarSesion={(correo, contraseña) => console.log(correo, contraseña)}  />
    </div>
    <App />
  </StrictMode>,
)
