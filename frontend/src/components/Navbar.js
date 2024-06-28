import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Projects', path: '/projects' },
        { text: 'Contact', path: '/contact' },
        { text: 'Skills', path: '/skills' },
        { text: 'Services', path: '/services' }
    ];

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button component={NavLink} to={item.path} key={index}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" style={{ backgroundColor: "#030502" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <span className="text-primary"><span className='text-white'>N</span>andan </span><span className='text-primary'>L</span>adani

                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, '& button': { m: 1 } }}>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            color="inherit"
                            component={NavLink}
                            variant="text"
                            size="large"
                            to={item.path}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {drawerList}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
