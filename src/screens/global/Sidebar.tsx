import { Box, Typography, useTheme, } from '@mui/material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const { palette } = useTheme();
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: palette.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )

}

const SidebarComp = () => {
  const { palette } = useTheme();
  const [isCollapse, setIsCollapse] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${palette.primary[400]} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: "5px 35px 5px 20px !important"
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important'
        },
      }}
    >
      <Sidebar collapsed={isCollapse}>
        <Menu>
          <Box paddingLeft={isCollapse ? undefined : "10%"}>
            <Item 
              title='Dashboard'
              to='/'
              icon=''
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Movimientos'
              to='/movements'
              icon=''
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Categorias'
              to='/categories'
              icon=''
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Analisis'
              to='/'
              icon=''
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          {/* <MenuItem
            onClick={() => setIsCollapse(!isCollapse)}
            icon={ isCollapse ? <MenuSharpIcon /> : undefined }
          >
            
          </MenuItem> */}
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarComp;