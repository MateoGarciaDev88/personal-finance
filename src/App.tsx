import { Box, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./screens/navbar";
import Dashboard from "./screens/dashboard";
import Incomes from "./screens/incomes";
import Expenses from "./screens/expenses";

function App() {
  const theme = useMemo( () => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar
              x={1}
            />
            <Routes>
              <Route path="/" element={ <Dashboard /> } />
              <Route path="/incomes" element={ <Incomes /> } />
              <Route path="/expenses" element={ <Expenses /> } />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
};

export default App;
