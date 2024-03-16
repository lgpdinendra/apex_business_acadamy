import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

import { FaHome } from "react-icons/fa";
import { MdExitToApp} from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdAnnouncement } from "react-icons/md";
import {MdOutlineClass } from "react-icons/md";
import { MdAssignmentLate } from "react-icons/md";

const StudentSideBar = () => {
    //const location = useLocation();
  return (
    <div>
      <React.Fragment>
                <ListItemButton >
                    <ListItemIcon>
                        <FaHome  />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <MdAssignmentLate   />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <MdOutlineClass  />
                    </ListItemIcon>
                    <ListItemText primary="Attendance" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <MdAnnouncement  />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <MdAnnouncement  />
                    </ListItemIcon>
                    <ListItemText primary="Teachers" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton >
                    <ListItemIcon>
                        <RiAccountCircleFill />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <MdExitToApp  />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
    </div>
  )
}

export default StudentSideBar
