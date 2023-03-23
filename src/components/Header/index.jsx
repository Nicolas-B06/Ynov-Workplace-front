import { Link } from 'react-router-dom';
import './index.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MuiDrawer from '@mui/material/Drawer';

export default function Header() {
    const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        // <nav className="header">
        //     <Link to="/">Home</Link>
        //     <Link to="/Users">User List</Link>
        // </nav>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setIsMenuOpen(true)} >
                        <MenuIcon />
                    </IconButton>
                    {isMenuOpen ? (<Menu>
                        <MenuItem edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/Users">User List</Link>
                        </MenuItem>
                    </Menu>)

                        : null}
                    <Typography variant="h6" color="inherit" component="div">
                        Ynov Workplace
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

    );
}