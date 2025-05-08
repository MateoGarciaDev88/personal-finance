import { Box, Typography, useTheme, } from '@mui/material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const Item = ({ title, to, icon, selected, setSelected, palette }) => {
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
          background: `${palette.primary[400]}`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent'
        },
        '& .pro-inner-item': {
          padding: "5px 35px 5px 20px"
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa'
        },
      }}
    >
      <Sidebar collapsed={isCollapse}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapse(!isCollapse)}
            icon={ isCollapse ? <MenuSharpIcon /> : undefined }
          >
            
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarComp;