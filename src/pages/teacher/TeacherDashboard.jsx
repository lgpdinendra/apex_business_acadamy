import React, { useState } from 'react'
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import { AppBar, Drawer } from '../../components/style';
import MenuIcon from '@mui/material/Menu';
import { FaChevronLeft } from "react-icons/fa6";
import TeacherSideBar from './TeacherSideBar';



const TeacherDashboard = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
  return (
    <div>
         <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} position='absolute'>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Teacher Dashboard
                        </Typography>
                        {/* <AccountMenu /> */}
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <FaChevronLeft />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <TeacherSideBar/>
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    {/* <Routes>
                        <Route path="/" element={<StudentHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Student/dashboard" element={<StudentHomePage />} />
                        <Route path="/Student/profile" element={<StudentProfile />} />

                        <Route path="/Student/subjects" element={<StudentSubjects />} />
                        <Route path="/Student/attendance" element={<ViewStdAttendance />} />
                        <Route path="/Student/complain" element={<StudentComplain />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes> */}
                </Box>
            </Box>
    </div>
  )
}

export default TeacherDashboard

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}