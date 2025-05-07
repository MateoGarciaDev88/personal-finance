import { useState, FC } from 'react'
// import { themeSettings } from '../../theme'
import { Box, Typography, useTheme } from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';
import FlexBetween from '../../components/FlexBetween';
import { Link } from 'react-router-dom';

type navbarProps = {
  x: number
}

const Navbar: FC<navbarProps> = ({
  x,
}) => {
  console.log('🚀 ~ x:', x);
  const { palette } = useTheme();
  const [select, setSelect] = useState('dashboard');

  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
      <FlexBetween
        gap="0.75rem"
      >
        <FitbitIcon sx={{ fontSize: "28px" }} />
        <Typography variant='h4' fontSize="16px">
          Finanzas Personales
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": {color: palette.primary[100]} }}>
          <Link
            to="/"
            onClick={() => setSelect("dashboard")}
            style={{
              color: select === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box>
        <Link
            to="/movements"
            onClick={() => setSelect("movimientos")}
            style={{
              color: select === "movimientos" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Movimientos
          </Link>
        </Box>
        <Box>
        <Link
            to="/categories"
            onClick={() => setSelect("categorias")}
            style={{
              color: select === "categorias" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Categorias
          </Link>
        </Box>
        <Box>
          <Link
            to="/login"
            onClick={() => setSelect("login")}
            style={{
              color: select === "login" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Login
          </Link>
          </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar