import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import log from "../../assets/log.png";
import { useAuth } from "../../auth/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const { isAuthenticated } = useAuth();

  if ( isAuthenticated ) {
		return <Navigate to="/" />;
  }

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#1a1a1d"
      px={2}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
        maxWidth="900px"
        boxShadow="0px 4px 20px rgba(0,0,0,0.1)"
        borderRadius="12px"
        overflow="hidden"
      >
        <Box
          display={{ xs: "none", md: "block" }}
          flex="1"
          sx={{
            backgroundImage: `url(${log})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          component="form"
          // onSubmit={entrar}
          display="flex"
          flexDirection="column"
          gap={2}
          p={4}
          width={{ xs: "100%", md: "400px" }}
          bgcolor="#fff"
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Iniciar sesión
          </Typography>
          <TextField
            fullWidth
            label="Correo electrónico"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Iniciar sesión
          </Button>
          <Typography variant="body2" textAlign="center">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registro"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Regístrate aquí
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
