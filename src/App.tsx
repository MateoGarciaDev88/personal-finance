import { Box, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import Movements from "./screens/movements";
import Categories from "./screens/categories";
import Topbar from "./screens/global/Topbar";
import Login from "./screens/login";
import Registro from "./screens/registro/Registro";
// import SidebarComp from "./screens/global/Sidebar";

function App() {
  const theme = useMemo( () => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <SidebarComp/> */}
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Topbar
                x={1}
              />
              <Routes>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/movements" element={ <Movements /> } />
                <Route path="/categories" element={ <Categories /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/registro" element={ <Registro /> } />
              </Routes>
            </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
};

export default App;
