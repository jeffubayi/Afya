import React from "react";

//components
import Profile from "./Profile";
import PatientsProgressBar from "./ProgressBar";
import { ListItem, ListItemIcon, Toolbar } from "@mui/material";
//icons
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SmsIcon from "@mui/icons-material/SmsOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import TuneIcon from "@mui/icons-material/TuneOutlined";
import AddProjectModal from "./AddProjectModal"
//styles
import styles from "./styles";

//sidebar navigation items
export const drawerItems = (
  <div style={styles.sidebar}>
    <ListItem button>
      <ListItemIcon>
        <FolderOpenIcon style={styles.largeIcon} />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon color="primary" style={styles.largeIcon} />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon style={styles.largeIcon} />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TuneIcon style={styles.largeIcon} />
      </ListItemIcon>
    </ListItem>
  </div>
);

//main navigation items
export const appBarItems = (
  <Toolbar style={styles.toolbar}>
     <AddProjectModal />
    
    <PatientsProgressBar />
    <Profile />
  </Toolbar>
);
