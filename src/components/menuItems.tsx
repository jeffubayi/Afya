import React from "react";

//components
import Profile from "./Profile";
import PatientsProgressBar from "./ProgressBar";
import { ListItem, ListItemIcon, Toolbar, Button } from "@material-ui/core";
//icons
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import SmsIcon from "@material-ui/icons/SmsOutlined";
import TimelineIcon from "@material-ui/icons/Timeline";
import TuneIcon from "@material-ui/icons/TuneOutlined";
import AddIcon from "@material-ui/icons/Add";

//styles
import styles from "../css/styles";

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
    <Button style={styles.button} variant="contained" endIcon={<AddIcon />}>
      Add Assessment
    </Button>
    <PatientsProgressBar />
    <Profile />
  </Toolbar>
);
