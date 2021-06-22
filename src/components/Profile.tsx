import React from "react";
//MUI components import
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

//profile image import
import img from "../css/assests/img.png";

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
            <Avatar alt="profile" src={img} />
          </ListItemAvatar>
        </ListItem>
      </List>
    </div>
  );
}
