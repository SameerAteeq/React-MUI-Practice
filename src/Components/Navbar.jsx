import { LightMode, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import { height } from '@mui/system';
import React, { useState } from 'react'

const Navbar = () => {
    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        borderRadius: theme.shape.borderRadius,
        padding: "0 10px",
        width: "40%"
    }))
    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        }
    }))
    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    }))
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    React MUI
                </Typography>
                <LightMode sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={2} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={(e) => setOpen(true)} sx={{ width: "30px", height: "30px " }} src="https://material-ui.com/static/images/avatar/2.jpg" />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: "30px", height: "30px " }} src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar