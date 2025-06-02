import { Box, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./screens/navbar";
import Dashboard from "./screens/dashboard";
import Movements from "./screens/movements";
import Categories from "./screens/categories";
import Login from "./screens/login";
import { AuthProvider } from "./context/AuthContext";
import Registro from "./screens/registro/Registro";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const theme = useMemo( () => createTheme(themeSettings), []);
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar
                x={1}
              />
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={ <Dashboard /> } />
                  <Route path="/movements" element={ <Movements /> } />
                  <Route path="/categories" element={ <Categories /> } />
                </Route>
              
                <Route path="/login" element={ <Login /> } />
                <Route path="/registro" element={ <Registro /> } />
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
};

export default App;