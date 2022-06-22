import React from "react";
//MUI components import
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import logo from "./assets/logo.png";

export default function Profile() {
  return (
    <div>
      <List>
        <ListItem>
        <ListItemText
            primary="Sandra Mamai"
            secondary="Smamai@accessafya.com"
          />
          <ListItemAvatar>
            <Avatar alt="profile" src={logo} />
          </ListItemAvatar>
        </ListItem>
      </List>
    </div>
  );
}