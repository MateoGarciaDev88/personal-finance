import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css'; 
import log from "../../assets/log.png";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const entrar = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
};

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
        onSubmit={entrar}
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
            value={data.email}
            onChange={entrar}
        />
        <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={data.password}
            onChange={entrar}
        />
        <Button type="submit" variant="contained" color="primary">
            Iniciar sesión
        </Button>
        <Typography variant="body2" textAlign="center">
            ¿No tienes cuenta?{" "}
            <Link to="/register" style={{ color: "blue", textDecoration: "none" }}>
            Regístrate aquí
            </Link>
        </Typography>
        </Box>
    </Box>
    </Box>
);
}
export default Login
