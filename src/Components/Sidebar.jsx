import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Home, Person, Group, Settings, StorefrontOutlined, ModeNight, AccountBoxOutlined, MenuBookOutlined } from "@mui/icons-material";
import React from 'react'

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">

                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home" >
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="HomePage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages" >
                            <ListItemIcon>
                                <MenuBookOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friend" >
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friend" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups" >
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace" >
                            <ListItemIcon>
                                <StorefrontOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#setting" >
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile" >
                            <ListItemIcon>
                                <AccountBoxOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile" >
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar